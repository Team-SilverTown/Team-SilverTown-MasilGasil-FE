import { useUI } from "@/components/uiContext/UiContext";
import * as S from "./AlertModal.styles";
import { ModalLayout } from "@/components/Modal";

interface AlertModalProps {
  message: string;
}

interface ModalProp {
  props: AlertModalProps;
}

const AlertModal = ({ props }: ModalProp) => {
  const { closeModal } = useUI();
  const { message } = props;

  if (!message) {
    closeModal();
    return;
  }

  return (
    <ModalLayout>
      <S.AlertModalLayout>
        <S.AlertModalMessage>{message}</S.AlertModalMessage>
      </S.AlertModalLayout>
    </ModalLayout>
  );
};

export default AlertModal;
