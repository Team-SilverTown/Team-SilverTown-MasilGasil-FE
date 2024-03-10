"use client";

import { Button } from "@/components";
import * as S from "./MateActions.styles";
import useTheme from "@/lib/hooks/useTheme";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import { DefaultTheme } from "styled-components";

const MateActions = () => {
  const theme = useTheme();

  // 데이터가 확정되지 않아 추후 데이터를 고려하여 제작

  // 상태를 변경시키기 위한 임시값
  const isRequest = true;
  const isPending = false;

  const isInvited = false;
  const isAuthorAndTimeOver = false;

  const isCompleted = false;
  const isRecording = false;

  if (!theme) {
    return;
  }

  /* 
  TODO
  merge 전 dev pull 후 버튼 수정 사항 반영하여 e.preventDefault 적용
*/

  const handleClickRequest = () => {
    // 추후 요청하기에 대한 로직
    console.log("click request button");
  };

  const handleClickCancel = () => {
    // 추후 취소에대한 모달 추가 제공
    console.log("click Cancel button");
  };

  const handleClickChatting = () => {
    // 추후 취소에대한 모달 추가 제공
    console.log("click Cancel button");
  };

  const handleClickStart = () => {
    // 추후 메이트 산책을 시작

    // 해당 기능에 대한 정확한 논의가 이루어진 상태는 아니지만 필요할것 같아서 임시로 구현
    console.log("click Start button");
  };

  const handleClickEnd = () => {
    // 추후 메이트 산책을 종료

    // 해당 기능에 대한 정확한 논의가 이루어진 상태는 아니지만 필요할것 같아서 임시로 구현
    console.log("click End button");
  };

  const handleClickCompletedChatting = () => {
    // 추후 종료된 대화방으로 이동
    console.log("click Completed Chatting List button");
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
    Chatting: createButton({ theme, text: "대화하기", onClick: handleClickChatting }),
    Start: createButton({ theme, text: "산책 시작하기", onClick: handleClickEnd }),
    End: createButton({ theme, text: "산책 종료하기", onClick: () => {} }),
    Completed: createButton({ theme, text: "메이트 산책 완료", disabled: true }),
  };

  return (
    <S.MateActionsLayout>
      {isRequest && ButtonList.Request}

      {isPending && (
        <>
          {ButtonList.Pending}
          {ButtonList.Cancel}
        </>
      )}

      {isInvited && (
        <>
          {isAuthorAndTimeOver && ButtonList.Start}
          {ButtonList.Chatting}
          {ButtonList.Cancel}
        </>
      )}

      {isRecording && ButtonList.End}

      {isCompleted && (
        <>
          {ButtonList.Completed}

          <Button
            variant="naked"
            onClickHandler={handleClickCompletedChatting}
          >
            지난 대화 확인하기
          </Button>
        </>
      )}
    </S.MateActionsLayout>
  );
};

export default MateActions;

// MateActions 에서만 사용되어지는 버튼

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
