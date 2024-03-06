"use client";

import React, { useEffect } from "react";
import useMasilDiaryController from "./MasilDiary.controller";
import * as GS from "@/styles/GlobalStyle";
import * as S from "./MasilDiary.styles";

import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";
import { Tab } from "@/components";
import { Calendar } from "@/components/ShadcnUi/ui/calendar";
import MonthlyStatistics from "./components/MonthlyStatistics/MonthlyStatistics";
import MasilDiarySheet from "./components/MasilDiarySheet/MasilDiarySheet";
import { DaylessCalendar } from "@/components/ShadcnUi/ui/daylessCalender";
import DiaryItem from "./components/DiaryItem/DiaryItem";

const MasilDiaryView = () => {
  const { currentTabIdx, date, isSheetOpen, setCurrentTabIdx, setDate, setIsSheetOpen } =
    useMasilDiaryController();

  useEffect(() => {
    setDate(new Date());
  }, [currentTabIdx]);

  const handleSelectDate = (day: Date | undefined) => {
    if (day) {
      setDate(day);
    }
    setIsSheetOpen(true);
  };

  const handleChangeMonth = (day: Date | undefined) => {
    if (day) {
      setDate(day);
    }

    // TODO: 쿼리스트링 Link 이동 (startDate=2023-03-06)
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
              onMonthChange={handleChangeMonth}
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
        {currentTabIdx === 1 && (
          <>
            <DaylessCalendar
              mode="single"
              onMonthChange={handleChangeMonth}
            />
            {/* TODO: 쿼리스트링에 따른 masils 데이터를 받아와, 해당 월의 기록을 출력*/}
            {/* {masils
              ? masils.map((masil) => {
                  return <DiaryItem masil={masil} />;
                })
              : "기록이 존재하지 않습니다."} */}
            <S.Section>기록이 존재하지 않습니다</S.Section>
          </>
        )}
      </GS.CommonContainer>
    </>
  );
};

export default MasilDiaryView;
