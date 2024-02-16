import { ModalLayout } from "@/components/Modal";
import * as S from "./LogInitConfirmModal.styles";
import { Button } from "@/components";
import Theme, { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import { useUI } from "@/components/uiContext/UiContext";

interface ConfirmModalProps {
  onClickAccept: () => void;
}

interface ModalProp {
  props: ConfirmModalProps;
}

const LogInitConfirmModal = ({ props }: ModalProp) => {
  const { closeModal } = useUI();
  const { onClickAccept } = props;

  if (!onClickAccept) {
    closeModal();
    return;
  }

  return (
    <ModalLayout>
      <S.LogInitConfirmLayout>
        <S.LogInitConfirmMessage>
          모든 기록이 사라집니다.
          <br />
          진짜로 뒤로 가쉴...?
        </S.LogInitConfirmMessage>

        <S.LogInitConfirmWarning>현재의 기록은 저장되지 않고 사라집니다.</S.LogInitConfirmWarning>

        <S.ConfirmActionsContainer>
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
            확인
          </Button>
        </S.ConfirmActionsContainer>
      </S.LogInitConfirmLayout>
    </ModalLayout>
  );
};

export default LogInitConfirmModal;
