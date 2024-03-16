"use client";

import * as S from "./LogRecordEdit.styles";

import { Button, PinEditSlideButton, Textarea } from "@/components";
import Theme, { FONT_WEIGHT, FONT_SIZE, Z_INDEX } from "@/styles/theme";
import Sheet from "@/components/BottomSheet";
import useTheme from "@/lib/hooks/useTheme";
import useLogRecordEditController from "./LogRecordEdit.controller";

const LogRecordEditView = () => {
  const { logData, register, handleClickPin, handleRemovePin, handleSubmit } =
    useLogRecordEditController();

  const theme = useTheme();

  return (
    <>
      <S.MotionSheet
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        isOpen={true}
        onClose={() => null}
        fixedHeight={0.66}
        initialSnap={1}
        snapPoints={[0.9, 0.552]}
        style={{
          zIndex: Z_INDEX.BOTTOM_SHEET,
        }}
      >
        <Sheet.Container
          style={{
            maxWidth: 600,
            left: "50%",
            translateX: "-50%",
            backgroundColor: theme?.background_color,
            boxShadow: "0 2px 7.8px 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          <Sheet.Header />
          <Sheet.Content
            style={{
              width: "100%",
              height: "100%",
              minWidth: "24rem",
              padding: "0rem 2rem 9rem 2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.8rem",
              position: "relative",
              overflowY: "auto",
              userSelect: "none",
            }}
          >
            <S.LogEditContainer>
              <S.Header>메모</S.Header>
              <Textarea
                register={register("logMemo")}
                style={{ height: "17rem" }}
                placeholder="완료한 산책에 대한 간단한 메모를 작성해주세요."
              />
            </S.LogEditContainer>
            <S.LogEditContainer>
              <S.Header>핀</S.Header>
              <S.LogEditPinList>
                {logData.pins.length > 0 &&
                  logData.pins.map((pin, index) => (
                    <PinEditSlideButton
                      key={index}
                      pinIndex={index}
                      pin={pin}
                      onClickPin={handleClickPin}
                      removePin={handleRemovePin}
                    />
                  ))}

                {logData.pins.length === 0 && "저장한 핀이 존재하지 않습니다."}
              </S.LogEditPinList>
            </S.LogEditContainer>
          </Sheet.Content>
        </Sheet.Container>
      </S.MotionSheet>

      <Button
        buttonColor={Theme.lightTheme.green_500}
        variant="neumorp"
        textColor={Theme.lightTheme.white}
        style={{
          fontWeight: FONT_WEIGHT.BOLD,
          opacity: 0.9,
          fontSize: FONT_SIZE.LARGE,
          position: "fixed",
          bottom: "3.2rem",
          zIndex: Z_INDEX.BOTTOM_SHEET + 1,
          maxWidth: "56rem",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        width={"90%"}
        onClickHandler={handleSubmit}
      >
        산책 저장하기
      </Button>
    </>
  );
};
export default LogRecordEditView;
