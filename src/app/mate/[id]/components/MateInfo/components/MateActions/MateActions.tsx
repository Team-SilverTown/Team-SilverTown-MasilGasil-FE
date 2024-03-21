"use client";

import { Button } from "@/components";
import * as S from "./MateActions.styles";
import useTheme from "@/lib/hooks/useTheme";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import { DefaultTheme } from "styled-components";
import { Participant } from "@/types/OriginDataType";
import { MateDetailResponse } from "@/types/Response";
import { useMemo } from "react";
import useMeStore from "@/stores/useMeStore";
import { useUI } from "@/components/uiContext/UiContext";
import { useCancelParticipant, useRequestParticipant } from "@/app/mate/[id]/hooks";

interface MateActionsProps {
  mateData: MateDetailResponse;
  acceptedUserList: Participant[];
  requestedUserList: Participant[];
}

const MateActions = ({ mateData, acceptedUserList, requestedUserList }: MateActionsProps) => {
  const { setModalView, openModal, closeModal } = useUI();
  const { userId } = useMeStore();
  const theme = useTheme();

  const cancelParticipantMutation = useCancelParticipant();
  const postParticipantRequestMutation = useRequestParticipant();

  const participantId = useMemo(() => {
    const matchParticipant = mateData.participants.find(
      (participant) => userId === participant.userId,
    );

    if (matchParticipant) {
      return matchParticipant.id;
    }

    return false;
  }, [mateData, userId]);

  const userStatus = useMemo(() => {
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

  if (!theme) {
    return;
  }

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

    cancelParticipantMutation.mutate({ mateId: mateData.id, participantId: participantId });
  };

  const ButtonList = {
    Request: createButton({ theme, text: "메이트 신청하기", onClick: handleClickRequest }),
    Pending: createButton({ theme, text: "요청중", disabled: true }),
    Cancel: createButton({
      theme,
      text: "취소하기",
      onClick: handleClickCancel,
      isSecondButton: true,
    }),
    Accepted: createButton({ theme, text: "참여중 입니다.", disabled: true }),
    Completed: createButton({ theme, text: "종료된 메이트", disabled: true }),
    Author: createButton({ theme, text: "메이트 모집중...", disabled: true }),
  };

  if (!userId) {
    return <></>;
  }

  return (
    <S.MateActionsLayout>
      {ButtonList.Cancel}
      {ButtonList.Request}
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

interface CreateButtonProps {
  text: string;
  theme: DefaultTheme;
  onClick?: () => void;

  disabled?: boolean;
  isSecondButton?: boolean;
}

const createButton = ({ theme, text, onClick, disabled, isSecondButton }: CreateButtonProps) => {
  return (
    <Button
      width={"100%"}
      useRipple
      buttonColor={isSecondButton ? theme.gray_300 : theme.green_500}
      textColor={theme.text_secondary_color}
      rippleColor={theme.text_secondary_color + 50}
      style={{
        whiteSpace: "nowrap",
        fontSize: FONT_SIZE.H6,
        fontWeight: FONT_WEIGHT.SEMIBOLD,
        userSelect: "none",
      }}
      onClickHandler={onClick}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};
