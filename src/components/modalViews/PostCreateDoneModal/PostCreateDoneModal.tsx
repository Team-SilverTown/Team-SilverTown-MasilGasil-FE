"use client";

import Lottie from "react-lottie";
import * as S from "./PostCreateDoneModal.styles";
import { ModalLayout } from "@/components/Modal";
import animationData from "./animationData.json";
import { Button } from "@/components";
import useTheme from "@/lib/hooks/useTheme";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import { useUI } from "@/components/uiContext/UiContext";

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const PostCreateDoneModal = () => {
  const theme = useTheme();
  const { closeModal } = useUI();
  return (
    <ModalLayout>
      <S.PostCreateDoneLayout>
        <Lottie
          options={defaultOptions}
          height={150}
          width={250}
          isClickToPauseDisabled={true}
        />

        <S.PostCreateDoneTitle>산책로가 등록되었습니다!</S.PostCreateDoneTitle>

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
          닫기
        </Button>
      </S.PostCreateDoneLayout>
    </ModalLayout>
  );
};

export default PostCreateDoneModal;
