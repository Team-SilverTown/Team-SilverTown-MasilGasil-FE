import ModalLayout from "@/components/Modal/ModalLayout";

interface ModalProp {
  props: {
    message: string;
    warningMessage?: string;
    acceptButtonText?: string;
    cancelButtonText?: string;
    onClickAccept: () => void;
  };
}

const AccessLoginModal = ({ props }: ModalProp) => {
  const {
    onClickAccept,
    message,
    warningMessage,
    acceptButtonText = "확인",
    cancelButtonText = "취소",
  } = props;

  return <ModalLayout>AccessLoginModal</ModalLayout>;
};

export default AccessLoginModal;
