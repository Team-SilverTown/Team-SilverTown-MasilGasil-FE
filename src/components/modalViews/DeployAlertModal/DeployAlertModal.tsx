"use client";

import Lottie from "react-lottie";
import * as S from "./DeployAlertModal.styles";

import { ModalLayout } from "@/components/Modal";
import AnimationData from "./AnimationData.json";
import { useUI } from "@/components/uiContext/UiContext";
import { Button } from "@/components";
import useTheme from "@/lib/hooks/useTheme";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";

const DeployAlertModal = () => {
  const { closeModal } = useUI();
  const theme = useTheme();

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: AnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <ModalLayout>
      <S.DeployAlertLayout>
        <Lottie
          options={defaultOptions}
          height={200}
          width={240}
          isClickToPauseDisabled={true}
        />

        <S.DeployAlertMessage>현재 개발중인 기능입니다.</S.DeployAlertMessage>

        <Button
          buttonColor={theme?.green_500}
          width={"90%"}
          variant="neumorp"
          textColor={theme?.white}
          style={{
            fontWeight: FONT_WEIGHT.BOLD,
            fontSize: FONT_SIZE.LARGE,
          }}
          onClickHandler={closeModal}
        >
          닫기
        </Button>
      </S.DeployAlertLayout>
    </ModalLayout>
  );
};

export default DeployAlertModal;
