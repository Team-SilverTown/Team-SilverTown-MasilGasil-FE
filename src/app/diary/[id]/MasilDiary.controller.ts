"use client";

import { useEffect, useState } from "react";

const useMasilDiaryController = () => {
  /**
   * @state1 현재 탭 상태
   * @state2 현재 월
   * @state2 특정 월 산책 기록 + 통계 데이터
   */

  const [currentTabIdx, setCurrentTabIdx] = useState(0);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    console.log(date);
  }, [date]);

  /**
   * @func1 탭 클릭 시 상태 변경 (calender, list)
   * @func2 캘린더 월 이동 시 그 월에 해당하는 산책 기록을 캘린더에 출력
   * @func3 캘린더 일자 클릭 시 해당 일자의 산책 기록을 담은 바텀시트 출력
   * @func4 각 산책 기록을 클릭하면 해당 산책 기록 id의 logDetail 페이지로 이동
   */
  return { currentTabIdx, setCurrentTabIdx, date, setDate, isSheetOpen, setIsSheetOpen };
};

export default useMasilDiaryController;
