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
import Return from "@/components/icons/Return";
import Theme from "@/styles/theme";

const MasilDiaryView = () => {
  const {
    currentTabIdx,
    date,
    isSheetOpen,
    masils,
    dailyMasils,
    monthlyMasils,
    setCurrentTabIdx,
    setDate,
    setIsSheetOpen,
    handleSelectDate,
    handleChangeMonth,
  } = useMasilDiaryController();

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
            <S.CalenderWrapper>
              <Calendar
                mode="single"
                onMonthChange={handleChangeMonth}
                selected={date}
                onSelect={handleSelectDate}
                className="rounded-md"
                month={date}
                modifiers={{ booked: monthlyMasils }}
                modifiersStyles={{ booked: S.MonthMasils }}
              />
            </S.CalenderWrapper>
            <S.Wrapper>
              <Return
                width={13}
                fill={Theme.lightTheme.gray_300}
              />
              <S.SubText
                onClick={() => {
                  setDate(new Date());
                }}
              >
                Today
              </S.SubText>
            </S.Wrapper>

            <MonthlyStatistics month={date?.getMonth()} />

            <S.Section>조회를 원하는 날짜를 선택해주세요</S.Section>

            <MasilDiarySheet
              date={date}
              isSheetOpen={isSheetOpen}
              masils={dailyMasils}
              setIsSheetOpen={setIsSheetOpen}
            />
          </>
        )}
        {currentTabIdx === 1 && (
          <>
            <DaylessCalendar
              mode="single"
              onMonthChange={handleChangeMonth}
            />
            {/* TODO: 쿼리스트링에 따른 masils 데이터를 받아와, 해당 월의 기록을 출력*/}
            {masils.contents ? (
              masils.contents.map((masil) => {
                return masil.masils.map((m, i) => {
                  return (
                    <DiaryItem
                      masil={m}
                      key={m.id}
                    />
                  );
                });
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
