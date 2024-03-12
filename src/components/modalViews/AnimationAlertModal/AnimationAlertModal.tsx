"use client";

import Lottie from "react-lottie";
import * as S from "./AnimationAlertModal.styles";

import { ModalLayout } from "@/components/Modal";
import AlertAnimationData from "./AlertAnimationData.json";
import { CSSProperties } from "react";
import { Button } from "@/components";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import useTheme from "@/lib/hooks/useTheme";
import { useUI } from "@/components/uiContext/UiContext";

interface AnimationAlertModalProps {
  message: React.ReactNode;
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
  return (
    <ModalLayout>
      <S.AnimationAlertModalLayout>
        <Lottie
          options={defaultOptions}
          height={220}
          width={220}
          isClickToPauseDisabled={true}
        />

        <S.AnimationAlertModalMessage style={textStyle}>{message}</S.AnimationAlertModalMessage>

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
