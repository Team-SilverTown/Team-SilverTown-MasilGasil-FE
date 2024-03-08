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
  // onUploadThumbnail: (pinIndex: number, image: File) => void;
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
  const { register, setValue, getValues, handleSubmit } = useForm<PinEditType>({
    defaultValues: { pinContent: pin.content, pinImage: null },
  });

  if (!onClickAccept) {
    closeModal();
    return;
  }

  /**
   * @func handleImageUpload
   * @params (image: File, pinIndex: number)
   * @brief 사용자가 핀 썸네일을 첨부하면 실행됩니다. API와 통신하여 이미지 파일을 서버에 저장, URL로 변환하여 반환받습니다. 성공적으로 반환받은 경우 썸네일 URL을 logData의 핀 인덱스에 저장합니다.
   */
  const handleImageUpload = (event: React.MouseEvent) => {
    // onUploadThumbnail(pinIndex,);
    // TODO: 이미지 파일 업로드받음
    // TODO: 이미지 서버에 전송, URL로 반환받음
    // TODO: ImageURL State를 반환받은 URL로 갱신
  };

  const handleValid = ({ pinContent, pinImage }: PinEditType) => {
    // Image 업로드 후 Url 반ㅌ환 작업

    onClickAccept(null, pinContent);
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
