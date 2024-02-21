import { ModalLayout } from "@/components/Modal";
import { MasilRecordRequest } from "@/types/Request";

interface LogRecordDoneModalProps {
  logData: MasilRecordRequest;
  onClickUploadPost: () => void;
  onClickCancle: () => {};
}

interface ModalProps {
  props: LogRecordDoneModalProps;
}

const LogRecordDoneModal = ({ props }: ModalProps) => {
  const { onClickCancle, onClickUploadPost, logData } = props;

  return <ModalLayout></ModalLayout>;
};

export default LogRecordDoneModal;
