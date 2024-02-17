import { Button } from "@/components";
import * as S from "./ConfirmModal.styles";
import Theme, { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import { useUI } from "@/components/uiContext/UiContext";
import { ModalLayout } from "@/components/Modal";

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
          <Button
            variant="neumorp"
            buttonColor={Theme.lightTheme.gray_200}
            width={100}
            style={{ fontSize: FONT_SIZE.LARGE, fontWeight: FONT_WEIGHT.SEMIBOLD }}
            onClickHandler={closeModal}
          >
            {cancelButtonText}
          </Button>

          <Button
            variant="neumorp"
            buttonColor={Theme.lightTheme.green_500}
            width={100}
            style={{ fontSize: FONT_SIZE.LARGE, fontWeight: FONT_WEIGHT.SEMIBOLD }}
            onClickHandler={onClickAccept}
          >
            {acceptButtonText}
          </Button>
        </S.ConfirmModalActionsContainer>
      </S.ConfirmModalLayout>
    </ModalLayout>
  );
};

export default ConfirmModal;
