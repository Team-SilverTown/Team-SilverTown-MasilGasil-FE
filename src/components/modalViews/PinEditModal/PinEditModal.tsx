import { ModalLayout } from "@/components/Modal";
import { useUI } from "@/components/uiContext/UiContext";
import { Pin } from "@/types/OriginDataType";
import * as S from "./PinEditModal.styles";
import Image from "@/components/icons/Image";
import Theme, { FONT_WEIGHT, FONT_SIZE } from "@/styles/theme";
import { Button, Textarea } from "@/components";
import { useForm } from "react-hook-form";
import { Trash } from "@/components/icons";
import InputUpload from "@/components/InputUpload/InputUpload";
import useImageUpload from "@/lib/hooks/useImageUpload";

interface PinEditModalProps {
  onClickAccept: (imageUrl: string | null, pinContent: string | null) => void;
  pin: Pin;
  pinIndex: number;
  onClickRemove: (pinIndex: number) => void;
}

interface ModalProp {
  props: PinEditModalProps;
}

interface PinEditType {
  pinContent: string;
  pinImage: File | null;
}

const PinEditModal = ({ props }: ModalProp) => {
  const { closeModal } = useUI();
  const { onClickAccept, pin, pinIndex, onClickRemove } = props;
  const { register, setValue, handleSubmit } = useForm<PinEditType>({
    defaultValues: { pinContent: pin.content, pinImage: null },
  });

  const imageMutation = useImageUpload();

  if (!onClickAccept) {
    closeModal();
    return;
  }

  const handleValid = ({ pinContent, pinImage }: PinEditType) => {
    if (!pinImage) {
      onClickAccept(pinImage, pinContent);
      closeModal();
      return;
    }

    imageMutation.mutate(pinImage, {
      onSuccess: ({ imageUrl }) => {
        onClickAccept(imageUrl, pinContent);
        closeModal();
      },
    });
  };

  return (
    <ModalLayout modalTitle="핀 수정하기">
      <S.PinEditLayout>
        <InputUpload
          updateFile={(image: File | null) => setValue("pinImage", image)}
          previewValue={pin.thumbnailUrl}
        >
          <S.PinEditThumbnail>
            <Image
              width={40}
              fill={Theme.lightTheme.gray_300}
            />
            클릭하여 썸네일 업로드
          </S.PinEditThumbnail>
        </InputUpload>
        <S.PinEditContainer>
          <S.Header>핀 메모</S.Header>

          <Textarea
            register={register("pinContent")}
            placeholder={pin.content ? pin.content : "핀에 대한 간단한 메모를 작성해주세요."}
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
          onClickHandler={handleSubmit(handleValid)}
        >
          수정 완료
        </Button>
        <S.PinEditRemoveContainer>
          <Trash width={"1.5rem"} />
          <S.PinEditRemoveText
            onClick={() => {
              onClickRemove(pinIndex);
            }}
          >
            핀 제거
          </S.PinEditRemoveText>
        </S.PinEditRemoveContainer>
      </S.PinEditLayout>
    </ModalLayout>
  );
};

export default PinEditModal;
