import { Button, Input, SlideButton } from "@/components";
import * as S from "./LogRecordEdit.styles";
import Theme, { FONT_WEIGHT, FONT_SIZE } from "@/styles/theme";
import { useForm } from "react-hook-form";
import EditPencil from "@/components/icons/EditPencil";
import { MasilRecordRequest } from "@/types/Request";
import Image from "next/image";

interface LogRecordEditViewProps {
  logData: MasilRecordRequest;
  currentPinIndex: number;

  onClickPin: (pinIndex: number) => void;
  removePinData: (pinIndex: number) => void;
  onImageUpload: (pinIndex: number, image: File) => void;
  onSubmit: (memo: string) => void;
  setCurrentPinIndex: (pinIndex: number) => void;
}

const LogRecordEditView = ({
  logData,
  currentPinIndex,

  onClickPin,
  removePinData,
  onImageUpload,
  onSubmit,
  setCurrentPinIndex,
}: LogRecordEditViewProps) => {
  const { register, watch } = useForm();
  const watchLogMemo = watch("logMemo");

  return (
    <>
      <S.SizeHandlerContainer>
        <S.SizeHandler />
      </S.SizeHandlerContainer>
      <S.LogEditLayout>
        <S.LogEditContainer>
          <S.Header>경로 (테스트용)</S.Header>
          {logData.thumbnailUrl && (
            <Image
              alt="pathThumbnail"
              src={logData.thumbnailUrl}
            />
          )}
        </S.LogEditContainer>
        <S.LogEditContainer>
          <S.Header>메모</S.Header>
          <Input
            register={register("logMemo")}
            style={{ height: "17rem" }}
            placeholder="완료한 산책에 대한 간단한 메모를 작성해주세요."
          />
        </S.LogEditContainer>
        <S.LogEditContainer>
          <S.Header>핀</S.Header>
          <S.LogEditPinList>
            {logData.pins.length > 0
              ? logData.pins.map((pin, index) => {
                  return (
                    <S.LogEditPinItem key={index}>
                      <S.PinIndex $backgroundcolor={Theme.lightTheme.green_500}>
                        {index + 1}
                      </S.PinIndex>
                      <SlideButton
                        subChildren={"삭제"}
                        onButtonClickHandler={() => {
                          onClickPin(index);
                        }}
                        onSubButtonClickHandler={() => {
                          removePinData(index);
                        }}
                      >
                        <S.SlideButtonContent
                          $textColor={
                            pin.content ? Theme.lightTheme.black : Theme.lightTheme.gray_300
                          }
                        >
                          {pin.content ? pin.content : "내용을 작성해주세요"}
                          <EditPencil
                            fill={Theme.lightTheme.gray_300}
                            width="2.3rem"
                          />
                        </S.SlideButtonContent>
                      </SlideButton>
                    </S.LogEditPinItem>
                  );
                })
              : "저장한 핀이 존재하지 않습니다."}
          </S.LogEditPinList>
        </S.LogEditContainer>
        <Button
          buttonColor={Theme.lightTheme.green_500}
          variant="neumorp"
          textColor={Theme.lightTheme.white}
          style={{
            fontWeight: FONT_WEIGHT.BOLD,
            opacity: 0.9,
            fontSize: FONT_SIZE.LARGE,
            position: "fixed",
            bottom: "1.5rem",
            zIndex: 3,
            maxWidth: "56rem",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          width={"90%"}
          onClickHandler={() => {
            onSubmit(watchLogMemo);
          }}
        >
          산책 기록하기
        </Button>
      </S.LogEditLayout>
    </>
  );
};
export default LogRecordEditView;
