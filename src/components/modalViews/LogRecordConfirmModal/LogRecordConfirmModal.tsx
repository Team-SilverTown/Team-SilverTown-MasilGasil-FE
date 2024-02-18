import { Button } from "@/components";
import * as S from "./LogRecordConfirmModal.styles";
import Theme, { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import { useUI } from "@/components/uiContext/UiContext";
import { ModalLayout } from "@/components/Modal";

interface LogRecordConfirmModalProps {
  message: string;
  warningMessage?: string;
  acceptButtonText?: string;
  cancelButtonText?: string;
  onClickAccept: () => void;
}

interface ModalProp {
  props: LogRecordConfirmModalProps;
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
      <S.LogRecordConfirmModalLayout>
        <S.LogRecordConfirmModalMessage>{message}</S.LogRecordConfirmModalMessage>

        {warningMessage && (
          <S.LogRecordConfirmModalWarning>{warningMessage}</S.LogRecordConfirmModalWarning>
        )}

        <S.LogRecordConfirmModalActionsContainer>
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
        </S.LogRecordConfirmModalActionsContainer>
      </S.LogRecordConfirmModalLayout>
    </ModalLayout>
  );
};

export default ConfirmModal;
