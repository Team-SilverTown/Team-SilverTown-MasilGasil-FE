"use client";

import tailwindConfig from "@/../tailwind.config";
import { Button, PinEditSlideButton, Textarea } from "@/components";
import Sheet from "@/components/BottomSheet";

import useLogRecordEditController from "./LogRecordEdit.controller";

import resolveConfig from "tailwindcss/resolveConfig";

const LogRecordEditView = () => {
  const { logData, register, handleClickPin, handleRemovePin, handleSubmit } =
    useLogRecordEditController();

  const { theme } = resolveConfig(tailwindConfig);

  const headerStyle = "text-h6 font-bold";

  return (
    <>
      <Sheet
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        isOpen={true}
        onClose={() => null}
        fixedHeight={0.66}
        initialSnap={1}
        snapPoints={[0.9, 0.552]}
        style={{
          zIndex: theme.zIndex["bottom_sheet"],
        }}
      >
        <Sheet.Container
          style={{
            maxWidth: 600,
            left: "50%",
            translateX: "-50%",
            backgroundColor: theme.colors["background_color"],
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
            <div className="w-full">
              <h1 className={headerStyle}>메모</h1>
              <Textarea
                register={register("logMemo")}
                style={{ height: "17rem" }}
                placeholder="완료한 산책에 대한 간단한 메모를 작성해주세요."
              />
            </div>
            <div className="flex h-[3rem] w-full items-center justify-center bg-background_color">
              <h1 className={headerStyle}>핀</h1>
              <div className="flex w-full flex-col items-center justify-center gap-[1.5rem] text-gray_300">
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
              </div>
            </div>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>

      <Button
        buttonColor={theme.colors["green_500"]}
        variant="neumorp"
        textColor={theme.colors["white"]}
        style={{
          fontWeight: theme.fontWeight["bold"],
          opacity: 0.9,
          fontSize: theme.fontSize["large"],
          position: "fixed",
          bottom: "3.2rem",
          zIndex: +theme.zIndex["bottom_sheet"] + 1,
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
