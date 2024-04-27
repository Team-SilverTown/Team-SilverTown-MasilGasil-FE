"use client";

import style from "./LogRecordRecording.style.module.css";

import Theme, { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";

import { useMemo } from "react";

import { Button } from "@/components";

import useLogRecordRecordingController from "./LogRecordRecording.controller";

const LogRecordRecordingView = () => {
  const { logData, handleClickCompleteRecord } = useLogRecordRecordingController();

  const calcHour = Math.floor(logData.totalTime / 3600);
  const calcMin = Math.floor((logData.totalTime % 3600) / 60);
  const calcSec = logData.totalTime % 60;

  const hour = calcHour > 9 ? calcHour : `0${calcHour}`;
  const min = calcMin > 9 ? calcMin : `0${calcMin}`;
  const sec = calcSec > 9 ? calcSec : `0${calcSec}`;

  const kmCount = useMemo(() => Math.floor(logData.distance / 1000), [logData.distance]);
  const mCount = useMemo(() => logData.distance % 1000, [logData.distance]);

  const unitStyle = "text-medium font-bold text-gray_500";
  const infoStyle = `flex h-[5rem] items-center justify-center gap-[0.3rem] rounded-[0.8rem] bg-green_100 text-large font-bold ${style.calc_width}`;

  return (
    <div className="flex w-full min-w-[24rem] max-w-[36rem] select-none flex-col items-end pb-[3.2rem] opacity-90">
      <div className="w-full rounded-[0.8rem] border-tine border-transparent_10 bg-white p-[1.6rem] shadow-[0_0.2rem_0.8rem_0_#23232310]">
        <div className="mb-[1.6rem] flex w-full items-center gap-[1.6rem]">
          <p className={infoStyle}>
            {hour !== "00" && (
              <>
                {hour}
                <span className={unitStyle}>시</span>
              </>
            )}

            {min !== "00" && (
              <>
                {min}
                <span className={unitStyle}>분</span>
              </>
            )}

            {sec}
            <span className={unitStyle}>초</span>
          </p>

          <p className={infoStyle}>
            {kmCount !== 0 && (
              <>
                {kmCount}
                <span className={unitStyle}>km</span>
              </>
            )}
            {mCount}
            <span className={unitStyle}>m</span>
          </p>
        </div>

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
      </div>
    </div>
  );
};

export default LogRecordRecordingView;
