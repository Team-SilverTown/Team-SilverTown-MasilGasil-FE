"use client";

import React from "react";
import useMasilDiaryController from "./MasilDiary.controller";
import * as GS from "@/styles/GlobalStyle";
import * as S from "./MasilDiary.styles";

import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";
import { Tab } from "@/components";
import { Calendar } from "@/components/ShadcnUi/ui/calendar";

const MasilDiaryView = () => {
  const { currentTabIdx, setCurrentTabIdx } = useMasilDiaryController();
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const bookedDays = [new Date(2024, 2, 4), new Date(2024, 2, 9)];
  const bookedStyle = { backgroundColor: "green", color: "white", borderRadius: "50%" };

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
            cal
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md"
              modifiers={{ booked: bookedDays }}
              modifiersStyles={{ booked: bookedStyle }}
            />
          </>
        )}
        {currentTabIdx === 1 && <>list</>}
      </GS.CommonContainer>
    </>
  );
};

export default MasilDiaryView;
