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

import { usePathname, useRouter } from "next/navigation";

interface MasilDiaryViewProps {
  id: string;
}

const MasilDiaryView = ({ id }: MasilDiaryViewProps) => {
  const router = useRouter();
  const {
    currentTabIdx,
    date,
    isSheetOpen,
    masils,
    dailyMasils,
    setCurrentTabIdx,
    setDate,
    setIsSheetOpen,
    setDailyMasils,
  } = useMasilDiaryController();

  useEffect(() => {
    // 새로고침 시 쿼리스트링이 초기화됩니다.
    // TODO: 새로고침, 뒤로가기 시 쿼리스트링이 유지되며, 해당 쿼리스트링에 맞춰 캘린더 초기화
    router.replace(`/diary/${id}`);
  }, []);

  useEffect(() => {
    const selectedDate = date?.toLocaleDateString("en-CA");
    const temp = masils.contents.filter((m) => m.date === selectedDate);

    if (temp[0]) {
      setDailyMasils(temp[0]?.masils);
    } else {
      setDailyMasils(null);
    }
  }, [date]);

  useEffect(() => {
    setDate(new Date());
  }, [currentTabIdx]);

  /**
   * @function handleSelectDate
   * @param day
   * @breif 선택한 날짜를 갱신합니다. 일 단위로 변경되며, BottomSheet를 열어 해당 일자의 산책 기록을 보여줍니다.
   */
  const handleSelectDate = (day: Date | undefined) => {
    if (day) {
      setDate(day);
    }
    setIsSheetOpen(true);
  };

  /**
   * @function handleChangeMonth
   * @param day
   * @breif 선택한 날짜를 갱신합니다. 월 단위로 변경되며, 변경된 값을 Query Params로 넘겨줍니다.
   * @TODO 디바운싱 적용
   */
  const handleChangeMonth = (day: Date | undefined) => {
    if (day) {
      setDate(day);
      const startDate = day.toLocaleDateString("en-CA");

      router.push(`/diary/${id}?startDate=${startDate}`);
    }
  };

  const bookedDays = masils.contents.map((m) => new Date(m.date));

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

            <MasilDiarySheet
              isSheetOpen={isSheetOpen}
              masils={dailyMasils}
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
