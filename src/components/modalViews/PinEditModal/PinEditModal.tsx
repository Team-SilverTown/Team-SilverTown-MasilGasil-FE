import { ModalLayout } from "@/components/Modal";
import { useUI } from "@/components/uiContext/UiContext";
import { Pin } from "@/types/OriginDataType";
import * as S from "./PinEditModal.styles";
import Image from "@/components/icons/Image";
import Theme, { FONT_WEIGHT, FONT_SIZE } from "@/styles/theme";
import { Button, Input } from "@/components";
import { useForm } from "react-hook-form";

interface ConfirmModalProps {
  onClickAccept: () => void;
  pin: Pin;
  pinIndex: number;
}

interface ModalProp {
  props: ConfirmModalProps;
}

// TODO
// ModalLayout 컴포넌트 TailwindCSS 제거 후 Styled-components 마이그레이션

const PinEditModal = ({ props }: ModalProp) => {
  const { closeModal } = useUI();
  const { onClickAccept, pin, pinIndex } = props;
  const { register } = useForm();

  if (!onClickAccept) {
    closeModal();
    return;
  }

  return (
    <ModalLayout modalTitle="핀 수정하기">
      <S.PinEditLayout>
        <S.PinEditThumbnail
        // onClick={handleUploadThumbnail}
        >
          <Image
            width={40}
            fill={Theme.lightTheme.gray_300}
          />
          클릭하여 썸네일 업로드
        </S.PinEditThumbnail>

        <S.PinEditContainer>
          <S.Header>핀 메모</S.Header>

          {/* TODO: TextArea로 변경? */}
          <Input
            register={register("pinContent")}
            placeholder="핀에 대한 간단한 메모를 작성해주세요."
          />
        </S.PinEditContainer>
        <Button
          buttonColor={Theme.lightTheme.green_500}
          variant="neumorp"
          textColor={Theme.lightTheme.white}
          style={{
            fontWeight: FONT_WEIGHT.BOLD,
            fontSize: FONT_SIZE.LARGE,
          }}
          // onClickHandler={handleSubmit}
        >
          수정 완료
        </Button>
      </S.PinEditLayout>
    </ModalLayout>
  );
};

export default PinEditModal;
