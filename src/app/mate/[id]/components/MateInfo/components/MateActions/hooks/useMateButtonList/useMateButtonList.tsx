"use client";

import { useCallback, useMemo } from "react";

import { useCancelParticipant, useRequestParticipant } from "@/app/mate/[id]/hooks";
import { useUI } from "@/components/uiContext/UiContext";

import { MateButton } from "../../components";

interface useMateButtonListPrams {
  mateId: string | number;
  participantId: number | false;
}

const useMateButtonList = ({ mateId, participantId }: useMateButtonListPrams) => {
  const { setModalView, openModal, closeModal } = useUI();
  const postParticipantRequestMutation = useRequestParticipant();
  const cancelParticipantMutation = useCancelParticipant({
    successMessage: "정상적으로 메이트에서 탈퇴되었습니다.",
  });

  const handleClickAccessLogin = useCallback(() => {
    setModalView("ACCESS_LOGIN_VIEW");
    openModal();
  }, []);

  const handleClickRequest = useCallback(() => {
    setModalView("MATE_REQUEST_VIEW");
    openModal({
      onAccept: (message: string) => {
        postParticipantRequestMutation.mutate({ message, mateId });
        closeModal();
      },
    });
  }, []);

  const handleClickCancel = useCallback(() => {
    if (!participantId) {
      return;
    }

    setModalView("CONFIRM_VIEW");
    openModal({
      message: "정말로 메이트에서 탈퇴하시겠어요?",
      warningMessage: "나가시면 되돌리실 수 없습니다.",
      onClickAccept: () => {
        cancelParticipantMutation.mutate({ mateId, participantId: participantId });
      },
    });
  }, []);

  const MateButtonList = useMemo(
    () => ({
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
    }),
    [],
  );

  return MateButtonList;
};

export default useMateButtonList;
