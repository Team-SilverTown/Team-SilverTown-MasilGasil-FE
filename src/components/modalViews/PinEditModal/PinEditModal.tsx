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

interface PinEditModalProps {
  onClickAccept: (imageUrl: string | null, pinContent: string | null) => void;
  pin: Pin;
  pinIndex: number;
  onUploadThumbnail: (pinIndex: number, image: File) => void;
  onClickRemove: (pinIndex: number) => void;
}

interface ModalProp {
  props: PinEditModalProps;
}

const PinEditModal = ({ props }: ModalProp) => {
  const { closeModal } = useUI();
  const { onClickAccept, pin, pinIndex, onUploadThumbnail, onClickRemove } = props;
  const { register, watch, setValue, getValues } = useForm();

  /* 렌더링을 할 필요가 있을까?... */
  // const watchPinMemo = watch("pinContent");
  // const watchPinImage = watch("pinImage");

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
        <InputUpload
          register={register("pinImage")}
          name="pinImage"
          setValue={setValue}
        >
          <S.PinEditThumbnail onClick={handleImageUpload}>
            <Image
              width={40}
              fill={Theme.lightTheme.gray_300}
            />
            클릭하여 썸네일 업로드
          </S.PinEditThumbnail>
        </InputUpload>
        <S.PinEditContainer>
          <S.Header>핀 메모</S.Header>

          {/* TODO: TextArea로 변경? */}
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
          onClickHandler={() => {
            console.log(getValues());
            // onClickAccept(watchPinImage, watchPinMemo);
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
