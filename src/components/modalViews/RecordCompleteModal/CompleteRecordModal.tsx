import * as GS from "../ConfirmModalGlobal.styles";
import { ModalLayout } from "@/components/Modal";
import { Button } from "@/components";
import Theme, { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import { useUI } from "@/components/uiContext/UiContext";

interface CompleteRecordModalProps {
  onClickAccept: () => void;
}

interface ModalProp {
  props: CompleteRecordModalProps;
}

const CompleteRecordModal = ({ props }: ModalProp) => {
  const { closeModal } = useUI();
  const { onClickAccept } = props;

  if (!onClickAccept) {
    closeModal();
    return;
  }

  return (
    <ModalLayout>
      <GS.ConfirmModalLayout>
        <GS.ConfirmModalMessage>산책을 마무리 하실건가요?</GS.ConfirmModalMessage>

        <GS.ConfirmModalWarning>해당 페이지로 되돌아올 수 없습니다.</GS.ConfirmModalWarning>

        <GS.ConfirmModalActionsContainer>
          <Button
            variant="neumorp"
            buttonColor={Theme.lightTheme.gray_200}
            width={100}
            style={{ fontSize: FONT_SIZE.LARGE, fontWeight: FONT_WEIGHT.SEMIBOLD }}
            onClickHandler={closeModal}
          >
            취소
          </Button>
          <Button
            variant="neumorp"
            buttonColor={Theme.lightTheme.green_500}
            width={100}
            style={{ fontSize: FONT_SIZE.LARGE, fontWeight: FONT_WEIGHT.SEMIBOLD }}
            onClickHandler={onClickAccept}
          >
            완료
          </Button>
        </GS.ConfirmModalActionsContainer>
      </GS.ConfirmModalLayout>
    </ModalLayout>
  );
};

export default CompleteRecordModal;
