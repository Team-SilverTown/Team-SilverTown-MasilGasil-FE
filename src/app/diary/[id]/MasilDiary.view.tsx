"use client";

import * as GS from "@/styles/GlobalStyle";
import Theme from "@/styles/theme";

import React from "react";

import { Tab } from "@/components";
import { Calendar } from "@/components/ShadcnUi/ui/calendar";
import { DaylessCalendar } from "@/components/ShadcnUi/ui/daylessCalender";
import Return from "@/components/icons/Return";
import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";

import useMasilDiaryController from "./MasilDiary.controller";
import { TabIndex } from "./MasilDiary.type";
import DiaryItem from "./components/DiaryItem/DiaryItem";
import MasilDiarySheet from "./components/MasilDiarySheet/MasilDiarySheet";
import MonthlyStatistics from "./components/MonthlyStatistics/MonthlyStatistics";

const MasilDiaryView = () => {
  const {
    masilData,
    currentTabIdx,
    date,
    isSheetOpen,
    dailyMasils,
    monthlyMasils,
    monthlyMasilsDate,
    setCurrentTabIdx,
    setIsSheetOpen,
    handleSelectDate,
    handleChangeMonth,
    handleClickToday,
  } = useMasilDiaryController();

  const sectionStyle = "w-full pt-[4rem] text-center text-gray_300";
  const wrapperStyle = "flex w-full justify-end gap-[0.3rem] pb-[2rem] pl-[2rem] pr-[2rem]";
  const subTextStyle = "text-gray_300 hover:cursor-pointer hover:underline";
  const monthlyMasilsStyle = { backgroundColor: "#B9DB56", color: "white", borderRadius: "50%" };

  return (
    <>
      <TopNavigator
        leftChildren={<GoBackButton />}
        title="나의 산책일지"
      />
      <GS.CommonContainer
        style={{ paddingTop: "6rem", paddingBottom: "18rem", userSelect: "none" }}
      >
        <Tab
          tabContents={["캘린더", "리스트"]}
          tabClickHandler={(index) => {
            setCurrentTabIdx(index);
          }}
          focusedTab={currentTabIdx}
          layoutId="diary-underline"
          style={{ fontSize: "1.6rem" }}
        />
        {currentTabIdx === TabIndex.Calendar && (
          <>
            <div className="h-[28rem] w-full">
              <Calendar
                mode="single"
                onMonthChange={handleChangeMonth}
                selected={date}
                onSelect={handleSelectDate}
                className="rounded-md"
                month={date}
                modifiers={{ booked: monthlyMasilsDate ? monthlyMasilsDate : [] }}
                modifiersStyles={{ booked: monthlyMasilsStyle }}
              />
            </div>
            <div className={wrapperStyle}>
              <Return
                width={13}
                fill={Theme.lightTheme.gray_300}
              />
              <span
                className={subTextStyle}
                onClick={handleClickToday}
              >
                Today
              </span>
            </div>

            <MonthlyStatistics
              month={date?.getMonth()}
              masils={masilData}
            />

            <div className={sectionStyle}>조회를 원하는 날짜를 선택해주세요</div>

            <MasilDiarySheet
              date={date}
              isSheetOpen={isSheetOpen}
              masils={dailyMasils}
              setIsSheetOpen={setIsSheetOpen}
            />
          </>
        )}
        {currentTabIdx === TabIndex.List && (
          <>
            <DaylessCalendar
              mode="single"
              month={date}
              onMonthChange={handleChangeMonth}
            />

            <div className={wrapperStyle}>
              <Return
                width={13}
                fill={Theme.lightTheme.gray_300}
              />

              <span
                className={subTextStyle}
                onClick={handleClickToday}
              >
                Today
              </span>
            </div>
            {monthlyMasils && monthlyMasils.length > 0 ? (
              monthlyMasils.map((masil) => {
                return (
                  <DiaryItem
                    masil={masil}
                    key={masil.id}
                  />
                );
              })
            ) : (
              <p className={sectionStyle}>기록이 존재하지 않습니다</p>
            )}
          </>
        )}
      </GS.CommonContainer>
    </>
  );
};

export default MasilDiaryView;
