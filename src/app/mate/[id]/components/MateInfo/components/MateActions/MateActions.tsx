"use client";

import * as S from "./MateActions.styles";

import { useMemo } from "react";

import { useCancelParticipant, useRequestParticipant } from "@/app/mate/[id]/hooks";
import { useUI } from "@/components/uiContext/UiContext";
import useAuthStore from "@/lib/stores/useAuthStore";
import useMeStore from "@/lib/stores/useMeStore";
import { Participant } from "@/types/OriginDataType";
import { MateDetailResponse } from "@/types/Response";

import { MateButton } from "./components";

interface MateActionsProps {
  mateData: MateDetailResponse;
  acceptedUserList: Participant[];
  requestedUserList: Participant[];
}

const MateActions = ({ mateData, acceptedUserList, requestedUserList }: MateActionsProps) => {
  const { setModalView, openModal, closeModal } = useUI();
  const { userId } = useMeStore();
  const { isLogIn } = useAuthStore();

  const cancelParticipantMutation = useCancelParticipant({
    successMessage: "정상적으로 메이트에서 탈퇴되었습니다.",
  });

  const postParticipantRequestMutation = useRequestParticipant();

  const participantId = useMemo(() => {
    if (!userId) {
      return false;
    }

    const matchParticipant = mateData.participants.find(
      (participant) => userId === participant.userId,
    );

    if (matchParticipant) {
      return matchParticipant.id;
    }

    return false;
  }, [mateData, userId]);

  const userStatus = useMemo(() => {
    if (!isLogIn) {
      return "NOT_LOGIN";
    }

    if (mateData.status === "CLOSED") {
      return "CLOSE";
    }

    if (mateData.authorId === userId) {
      return "AUTHOR";
    }

    const isAccept = acceptedUserList.find((acceptedUser) => acceptedUser.userId === userId);

    if (isAccept) {
      return "ACCEPTED";
    }

    const isRequested = requestedUserList.find((acceptedUser) => acceptedUser.userId === userId);

    if (isRequested) {
      return "REQUESTED";
    }

    return "NO_ACTION";
  }, [requestedUserList, acceptedUserList, mateData, userId]);

  const handleClickRequest = () => {
    setModalView("MATE_REQUEST_VIEW");
    openModal({
      onAccept: (message: string) => {
        postParticipantRequestMutation.mutate({ message, mateId: mateData.id });
        closeModal();
      },
    });
  };

  const handleClickCancel = () => {
    if (!participantId) {
      return;
    }

    setModalView("CONFIRM_VIEW");
    openModal({
      message: "정말로 메이트에서 탈퇴하시겠어요?",
      warningMessage: "나가시면 되돌리실 수 없습니다.",
      onClickAccept: () => {
        cancelParticipantMutation.mutate({ mateId: mateData.id, participantId: participantId });
      },
    });
  };

  const handleClickAccessLogin = () => {
    setModalView("ACCESS_LOGIN_VIEW");
    openModal();
  };

  const ButtonList = {
    Login: (
      <MateButton
        text="로그인 후 이용하실 수 있습니다."
        onClick={handleClickAccessLogin}
      />
    ),

    Request: (
      <MateButton
        text="메이트 신청하기"
        onClick={handleClickRequest}
      />
    ),

    Pending: (
      <MateButton
        text="요청중"
        disabled
      />
    ),

    Cancel: (
      <MateButton
        text="취소하기"
        onClick={handleClickCancel}
        isSecondButton
      />
    ),

    Accepted: (
      <MateButton
        text="현재 참여중 입니다."
        disabled
      />
    ),

    Completed: (
      <MateButton
        text="종료된 메이트입니다."
        disabled
      />
    ),

    Author: (
      <MateButton
        text="메이트 모집중..."
        disabled
      />
    ),
  };

  return (
    <S.MateActionsLayout>
      {userStatus === "NOT_LOGIN" && ButtonList.Login}
      {userStatus === "NO_ACTION" && ButtonList.Request}
      {userStatus === "REQUESTED" && (
        <>
          {ButtonList.Pending}
          {ButtonList.Cancel}
        </>
      )}
      {userStatus === "ACCEPTED" && (
        <>
          {ButtonList.Accepted}
          {ButtonList.Cancel}
        </>
      )}
      {userStatus === "CLOSE" && <>{ButtonList.Completed}</>}
      {userStatus === "AUTHOR" && ButtonList.Author}
    </S.MateActionsLayout>
  );
};

export default MateActions;
