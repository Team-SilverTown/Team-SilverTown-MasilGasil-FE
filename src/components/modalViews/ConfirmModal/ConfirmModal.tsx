import { Button } from "@/components";
import * as S from "./ConfirmModal.styles";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import { useUI } from "@/components/uiContext/UiContext";
import { ModalLayout } from "@/components/Modal";
import useTheme from "@/lib/hooks/useTheme";

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

const ConfirmModal = ({ props }: ModalProp) => {
  const { closeModal } = useUI();
  const theme = useTheme();

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

  return (
    <ModalLayout>
      <S.ConfirmModalLayout>
        <S.ConfirmModalMessage>{message}</S.ConfirmModalMessage>

        {warningMessage && <S.ConfirmModalWarning>{warningMessage}</S.ConfirmModalWarning>}

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
