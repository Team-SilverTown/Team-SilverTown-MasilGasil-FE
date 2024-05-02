"use client";

import Theme, { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";

import { Button } from "@/components";

import useLogRecordStandbyController from "./LogRecordStandby.controller";

const LogRecordStandbyView = () => {
  const { handleStartRecord } = useLogRecordStandbyController();

  return (
    <article className="mb-[3.6rem] flex w-full min-w-[24rem] max-w-[36rem] select-none items-center justify-center px-[1.6rem] py-0 opacity-90">
      <Button
        buttonColor={Theme.lightTheme.green_500}
        variant="neumorp"
        textColor={Theme.lightTheme.white}
        style={{ fontWeight: FONT_WEIGHT.BOLD, fontSize: FONT_SIZE.LARGE }}
        width={"100%"}
        onClickHandler={handleStartRecord}
      >
        산책 시작하기
      </Button>
    </article>
  );
};

export default LogRecordStandbyView;
