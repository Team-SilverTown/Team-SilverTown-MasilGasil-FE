"use client";

import * as S from "./DoneModal.styles";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";

import { CSSProperties, useEffect } from "react";
import Lottie from "react-lottie";

import { Button } from "@/components";
import { ModalLayout } from "@/components/Modal";
import { useUI } from "@/components/uiContext/UiContext";
import useTheme from "@/lib/hooks/useTheme";

import animationData from "./animationData.json";

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

interface AnimationAlertModalProps {
  message: string;
  cancelButtonText?: string;
  textStyle?: CSSProperties;
}

interface ModalProp {
  props: AnimationAlertModalProps;
}

const DoneModal = ({ props }: ModalProp) => {
  const theme = useTheme();
  const { closeModal } = useUI();
  const { message, cancelButtonText = "닫기", textStyle } = props;

  useEffect(() => {
    const messageElement = document.querySelector("#done_modal_message_box");

    if (messageElement) {
      messageElement.innerHTML = message;
    }
  }, [message]);

  return (
    <ModalLayout>
      <S.DoneLayout>
        <Lottie
          options={defaultOptions}
          height={150}
          width={250}
          isClickToPauseDisabled={true}
        />

        <S.DoneTitle
          id={"done_modal_message_box"}
          style={textStyle}
        >
          {message}
        </S.DoneTitle>

        <Button
          buttonColor={theme?.green_500}
          variant="neumorp"
          textColor={theme?.white}
          style={{
            fontWeight: FONT_WEIGHT.BOLD,
            fontSize: FONT_SIZE.LARGE,
          }}
          onClickHandler={closeModal}
        >
          {cancelButtonText}
        </Button>
      </S.DoneLayout>
    </ModalLayout>
  );
};

export default DoneModal;
