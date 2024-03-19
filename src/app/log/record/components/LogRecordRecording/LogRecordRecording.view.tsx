"use client";

import * as S from "./LogRecordRecording.styles";

import { Button } from "@/components";
import Theme, { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import useLogRecordRecordingController from "./LogRecordRecording.controller";

const LogRecordRecordingView = () => {
  const { logData, handleClickCompleteRecord } = useLogRecordRecordingController();

  const calcHour = Math.floor(logData.totalTime / 3600);
  const calcMin = Math.floor((logData.totalTime % 3600) / 60);
  const calcSec = logData.totalTime % 60;

  const hour = calcHour > 9 ? calcHour : `0${calcHour}`;
  const min = calcMin > 9 ? calcMin : `0${calcMin}`;
  const sec = calcSec > 9 ? calcSec : `0${calcSec}`;

  return (
    <S.LogRecordActionLayout>
      <S.LogRecordActionContainer>
        <S.LogRecordInfoContainer>
          <S.LogRecordInfo>
            {hour !== "00" && (
              <>
                {hour}
                <S.LogRecordInfoUnit>시</S.LogRecordInfoUnit>
              </>
            )}

            {min !== "00" && (
              <>
                {min}
                <S.LogRecordInfoUnit>분</S.LogRecordInfoUnit>
              </>
            )}

            {sec}
            <S.LogRecordInfoUnit>초</S.LogRecordInfoUnit>
          </S.LogRecordInfo>

          <S.LogRecordInfo>
            {logData.distance}
            <S.LogRecordInfoUnit>m</S.LogRecordInfoUnit>
          </S.LogRecordInfo>
        </S.LogRecordInfoContainer>

        <Button
          buttonColor={Theme.lightTheme.green_500}
          variant="neumorp"
          textColor={Theme.lightTheme.white}
          style={{ fontWeight: FONT_WEIGHT.BOLD, fontSize: FONT_SIZE.LARGE }}
          width={"100%"}
          onClickHandler={handleClickCompleteRecord}
        >
          산책 끝내기
        </Button>
      </S.LogRecordActionContainer>
    </S.LogRecordActionLayout>
  );
};

export default LogRecordRecordingView;
