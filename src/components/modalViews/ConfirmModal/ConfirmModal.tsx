import { Button } from "@/components";
import * as S from "./ConfirmModal.styles";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import { useUI } from "@/components/uiContext/UiContext";
import { ModalLayout } from "@/components/Modal";
import useTheme from "@/lib/hooks/useTheme";
import ConfirmAnimationData from "./ConfirmAnimationData.json";
import Lottie from "react-lottie";
import { useEffect } from "react";

interface ConfirmModalProps {
  message: string;
  warningMessage?: string;
  acceptButtonText?: string;
  cancelButtonText?: string;
  onClickAccept: () => void;
}

interface ModalProp {
  props: ConfirmModalProps;
}

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: ConfirmAnimationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const ConfirmModal = ({ props }: ModalProp) => {
  const { closeModal } = useUI();

  const {
    onClickAccept,
    message,
    warningMessage,
    acceptButtonText = "확인",
    cancelButtonText = "취소",
  } = props;

  if (!onClickAccept && !message) {
    return;
  }

  useEffect(() => {
    const messageElement = document.querySelector("#conform_modal_message");
    const warningElement = document.querySelector("#conform_modal_warning_message");

    if (messageElement) {
      messageElement.innerHTML = message;
    }

    if (warningElement && warningMessage) {
      warningElement.innerHTML = warningMessage;
    }
  }, [message, warningMessage]);

  return (
    <ModalLayout>
      <S.ConfirmModalLayout>
        <Lottie
          options={defaultOptions}
          height={180}
          width={200}
          isClickToPauseDisabled={true}
        />
        <S.ConfirmModalMessage id="conform_modal_message">{message}</S.ConfirmModalMessage>

        <S.ConfirmModalWarning id="conform_modal_warning_message">
          {warningMessage}
        </S.ConfirmModalWarning>

        <S.ConfirmModalActionsContainer>
          <ConfirmModalButton
            onClick={closeModal}
            text={cancelButtonText}
            isCancelButton={true}
          />

          <ConfirmModalButton
            onClick={onClickAccept}
            text={acceptButtonText}
          />
        </S.ConfirmModalActionsContainer>
      </S.ConfirmModalLayout>
    </ModalLayout>
  );
};

export default ConfirmModal;

interface ConfirmModalButtonProps {
  onClick: () => void;
  text: string;
  isCancelButton?: boolean;
}

const ConfirmModalButton = ({ onClick, text, isCancelButton = false }: ConfirmModalButtonProps) => {
  const theme = useTheme();
  return (
    <Button
      variant="neumorp"
      buttonColor={isCancelButton ? theme?.gray_200 : theme?.green_500}
      textColor={theme?.text_secondary_color}
      style={{
        flexGrow: 1,
        whiteSpace: "nowrap",
        fontSize: FONT_SIZE.H6,
        fontWeight: FONT_WEIGHT.SEMIBOLD,
        userSelect: "none",
      }}
      onClickHandler={onClick}
    >
      {text}
    </Button>
  );
};
