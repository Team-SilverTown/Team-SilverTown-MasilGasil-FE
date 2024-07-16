"use client";

import { CaptionProps, useNavigation } from "react-day-picker";

import { ChevronLeft, ChevronRight } from "@/components/icons";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const CalenderHeader = (props: CaptionProps) => {
  const { goToMonth, nextMonth, previousMonth } = useNavigation();
  const currentYear = props.displayMonth.getFullYear();
  const currentMonth = props.displayMonth.getMonth() + 1;

  return (
    <header className="flex flex-col items-center px-4 py-2">
      <section className="mb-3 flex w-full items-center justify-between">
        <button
          onClick={() => previousMonth && goToMonth(previousMonth)}
          className="h-8 w-8"
        >
          <ChevronLeft
            stroke="lightGray"
            className=" h-8 w-8"
          />
        </button>
        <header className="text-2xl font-medium">
          {currentYear}년 {currentMonth}월
        </header>
        <button
          onClick={() => nextMonth && goToMonth(nextMonth)}
          className="h-8 w-8"
        >
          <ChevronRight
            stroke="lightGray"
            className=" h-8 w-8"
          />
        </button>
      </section>
    </header>
  );
};

export default CalenderHeader;
