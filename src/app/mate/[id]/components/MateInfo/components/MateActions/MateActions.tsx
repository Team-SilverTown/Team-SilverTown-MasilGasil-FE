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

interface MateActionsProps {
  mateData: MateDetailResponse;
  acceptedUserList: Participant[];
  requestedUserList: Participant[];
}

const MateActions = ({ mateData, acceptedUserList, requestedUserList }: MateActionsProps) => {
  const { userId } = useMeStore();
  const theme = useTheme();

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
  }, [requestedUserList, acceptedUserList, mateData]);

  if (!theme) {
    return;
  }

  const handleClickRequest = () => {
    // 추후 요청하기에 대한 로직
    console.log("click request button");
  };

  const handleClickCancel = () => {
    // 추후 취소에대한 모달 추가 제공
    console.log("click Cancel button");
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

  return (
    <S.MateActionsLayout>
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

      {userStatus === "CLOSE" && (
        <>
          {ButtonList.Completed}

          {/* <Button
            variant="naked"
            onClickHandler={handleClickCompletedChatting}
            style={{
              padding: "1rem",
            }}
          >
            지난 대화 확인하기
          </Button> */}
        </>
      )}

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
