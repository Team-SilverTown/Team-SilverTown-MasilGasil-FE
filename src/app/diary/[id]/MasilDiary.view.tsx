"use client";

import React from "react";
import useMasilDiaryController from "./MasilDiary.controller";
import * as GS from "@/styles/GlobalStyle";
import * as S from "./MasilDiary.styles";

import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";
import { Tab } from "@/components";
import { Calendar } from "@/components/ShadcnUi/ui/calendar";
import MonthlyStatistics from "./components/MonthlyStatistics/MonthlyStatistics";
import MasilDiarySheet from "./components/MasilDiarySheet/MasilDiarySheet";

const MasilDiaryView = () => {
  const { currentTabIdx, setCurrentTabIdx, date, setDate, isSheetOpen, setIsSheetOpen } =
    useMasilDiaryController();

  const handleSelectDate = (day: Date | undefined) => {
    if (day) {
      setDate(day);
    }

    setIsSheetOpen(true);
  };

  // TODO: 산책기록이 존재하는 날짜의 스타일 처리
  const bookedDays = [new Date(2024, 2, 6), new Date(2024, 2, 9)];
  const bookedStyle = { backgroundColor: "#B9DB56", color: "white", borderRadius: "50%" };

  return (
    <>
      <TopNavigator
        leftChildren={<GoBackButton />}
        title="나의 산책일지"
      />
      <GS.CommonContainer style={{ paddingTop: "6rem" }}>
        <Tab
          tabContents={["캘린더", "리스트"]}
          tabClickHandler={(index) => {
            setCurrentTabIdx(index);
          }}
          focusedTab={currentTabIdx}
        />
        {currentTabIdx === 0 && (
          <>
            <Calendar
              mode="single"
              onMonthChange={setDate}
              selected={date}
              onSelect={handleSelectDate}
              className="rounded-md"
              modifiers={{ booked: bookedDays }}
              modifiersStyles={{ booked: bookedStyle }}
            />

            <MonthlyStatistics month={date?.getMonth()} />

            <S.Section>조회를 원하는 날짜를 선택해주세요</S.Section>

            <MasilDiarySheet isSheetOpen={isSheetOpen} />
          </>
        )}
        {currentTabIdx === 1 && <>list</>}
      </GS.CommonContainer>
    </>
  );
};

export default MasilDiaryView;
