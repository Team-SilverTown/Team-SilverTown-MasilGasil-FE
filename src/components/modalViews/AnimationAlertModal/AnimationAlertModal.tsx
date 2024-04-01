"use client";

import * as S from "./AnimationAlertModal.styles";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";

import { CSSProperties, useEffect } from "react";
import Lottie from "react-lottie";

import { Button } from "@/components";
import { ModalLayout } from "@/components/Modal";
import { useUI } from "@/components/uiContext/UiContext";
import useTheme from "@/lib/hooks/useTheme";

import AlertAnimationData from "./AlertAnimationData.json";

interface AnimationAlertModalProps {
  message: string;
  cancelButtonText?: string;
  textStyle?: CSSProperties;
}

interface ModalProp {
  props: AnimationAlertModalProps;
}

const AnimationAlertModal = ({ props }: ModalProp) => {
  const { message, cancelButtonText = "닫기", textStyle } = props;
  const theme = useTheme();
  const { closeModal } = useUI();

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: AlertAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    const messageElement = document.querySelector("#messageBox");

    if (messageElement) {
      messageElement.innerHTML = message;
    }
  }, [message]);
  return (
    <ModalLayout>
      <S.AnimationAlertModalLayout>
        <Lottie
          options={defaultOptions}
          height={220}
          width={220}
          isClickToPauseDisabled={true}
        />

        <S.AnimationAlertModalMessage
          id={"messageBox"}
          style={textStyle}
        />

        <Button
          buttonColor={theme?.green_500}
          textColor={theme?.text_secondary_color}
          style={{
            width: "100%",
            whiteSpace: "nowrap",
            fontSize: FONT_SIZE.LARGE,
            fontWeight: FONT_WEIGHT.SEMIBOLD,
            userSelect: "none",
          }}
          onClickHandler={closeModal}
        >
          {cancelButtonText}
        </Button>
      </S.AnimationAlertModalLayout>
    </ModalLayout>
  );
};

export default AnimationAlertModal;
