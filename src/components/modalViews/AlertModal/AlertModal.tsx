import { useUI } from "@/components/uiContext/UiContext";
import * as S from "./AlertModal.styles";
import { ModalLayout } from "@/components/Modal";
import { Button } from "@/components";
import Theme, { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import React from "react";

interface AlertModalProps {
  message: React.ReactNode;
  cancelButtonText?: string;
}

interface ModalProp {
  props: AlertModalProps;
}

const AlertModal = ({ props }: ModalProp) => {
  const { closeModal } = useUI();
  const { message, cancelButtonText = "닫기" } = props;

  if (!message) {
    closeModal();
    return;
  }

  return (
    <ModalLayout>
      <S.AlertModalLayout>
        <S.AlertModalMessage>{message}</S.AlertModalMessage>
        <Button
          variant="neumorp"
          buttonColor={Theme.lightTheme.gray_200}
          style={{ fontSize: FONT_SIZE.LARGE, fontWeight: FONT_WEIGHT.SEMIBOLD }}
          onClickHandler={closeModal}
        >
          {cancelButtonText}
        </Button>
      </S.AlertModalLayout>
    </ModalLayout>
  );
};

export default AlertModal;
