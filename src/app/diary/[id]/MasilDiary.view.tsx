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
import { DaylessCalendar } from "@/components/ShadcnUi/ui/daylessCalender";
import DiaryItem from "./components/DiaryItem/DiaryItem";
import Return from "@/components/icons/Return";
import Theme from "@/styles/theme";
import { TabIndex } from "./MasilDiary.type";

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

  return (
    <>
      <TopNavigator
        leftChildren={<GoBackButton />}
        title="나의 산책일지"
      />
      <GS.CommonContainer style={{ paddingTop: "6rem", height:"2000px" }}>
        <Tab
          tabContents={["캘린더", "리스트"]}
          tabClickHandler={(index) => {
            setCurrentTabIdx(index);
          }}
          focusedTab={currentTabIdx}
          style={{ fontSize: "1.6rem" }}
        />
        {currentTabIdx === TabIndex.Calendar && (
          <>
            <S.CalenderWrapper>
              <Calendar
                mode="single"
                onMonthChange={handleChangeMonth}
                selected={date}
                onSelect={handleSelectDate}
                className="rounded-md"
                month={date}
                modifiers={{ booked: monthlyMasilsDate ? monthlyMasilsDate : [] }}
                modifiersStyles={{ booked: S.MonthlyMasils }}
              />
            </S.CalenderWrapper>
            <S.Wrapper>
              <Return
                width={13}
                fill={Theme.lightTheme.gray_300}
              />
              <S.SubText onClick={handleClickToday}>Today</S.SubText>
            </S.Wrapper>

            <MonthlyStatistics
              month={date?.getMonth()}
              masils={masilData}
            />

            <S.Section>조회를 원하는 날짜를 선택해주세요</S.Section>

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
            <S.Wrapper>
              <Return
                width={13}
                fill={Theme.lightTheme.gray_300}
              />
              <S.SubText onClick={handleClickToday}>Today</S.SubText>
            </S.Wrapper>
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
              <S.Section>기록이 존재하지 않습니다</S.Section>
            )}
          </>
        )}
      </GS.CommonContainer>
    </>
  );
};

export default MasilDiaryView;
