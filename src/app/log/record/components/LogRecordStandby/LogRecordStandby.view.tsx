"use client";

import * as S from "./LogRecordStandby.styles";
import Theme, { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";

import { Button } from "@/components";

import useLogRecordStandbyController from "./LogRecordStandby.controller";

const LogRecordStandbyView = () => {
  const { handleStartRecord } = useLogRecordStandbyController();

  return (
    <S.LogRecordStandbyLayout>
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
    </S.LogRecordStandbyLayout>
  );
};

export default LogRecordStandbyView;
