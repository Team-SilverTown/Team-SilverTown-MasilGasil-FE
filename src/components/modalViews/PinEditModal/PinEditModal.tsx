import { ModalLayout } from "@/components/Modal";
import { useUI } from "@/components/uiContext/UiContext";
import { Pin } from "@/types/OriginDataType";
import * as S from "./PinEditModal.styles";
import Image from "@/components/icons/Image";
import Theme, { FONT_WEIGHT, FONT_SIZE } from "@/styles/theme";
import { Button, Input } from "@/components";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Trash } from "@/components/icons";

interface ConfirmModalProps {
  onClickAccept: (imageUrl: string | null, pinContent: string | null) => void;
  pin: Pin;
  pinIndex: number;
  onUploadThumbnail: (pinIndex: number, image: File) => void;
  onClickRemove: (pinIndex: number) => void;
}

interface ModalProp {
  props: ConfirmModalProps;
}

const PinEditModal = ({ props }: ModalProp) => {
  const { closeModal } = useUI();
  const { onClickAccept, pin, pinIndex, onUploadThumbnail, onClickRemove } = props;
  const { register, watch } = useForm();
  const watchPinMemo = watch("pinContent");

  const [imageURL, setImageURL] = useState(null);

  if (!onClickAccept) {
    closeModal();
    return;
  }

  const handleImageUpload = (event: React.MouseEvent) => {
    // onUploadThumbnail(pinIndex,);
    // TODO: 이미지 파일 업로드받음
    // TODO: 이미지 서버에 전송, URL로 반환받음
    // TODO: ImageURL State를 반환받은 URL로 갱신
  };

  return (
    <ModalLayout modalTitle="핀 수정하기">
      <S.PinEditLayout>
        <S.PinEditThumbnail onClick={handleImageUpload}>
          {imageURL ? (
            <S.Image $src={imageURL} />
          ) : (
            <>
              <Image
                width={40}
                fill={Theme.lightTheme.gray_300}
              />
              클릭하여 썸네일 업로드
            </>
          )}
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
          onClickHandler={() => {
            onClickAccept(imageURL, watchPinMemo);
          }}
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