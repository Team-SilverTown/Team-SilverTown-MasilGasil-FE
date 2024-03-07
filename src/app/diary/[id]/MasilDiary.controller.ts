"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import dummyMasils from "./dummyMasils.json";

const useMasilDiaryController = () => {
  // TODO: 쿼리 파라미터를 조회하여 서버에 GET 요청, 해당 기간의 로그 기록 데이터를 받아옴
  // TODO: View는 로그 기록 데이터를 프롭으로 받고, 내부에서 처리

  /**
   * @state1 현재 탭 상태
   * @state2 현재 월
   * @state2 특정 월 산책 기록 + 통계 데이터
   */

  const searchParams = useSearchParams();
  const startDateParam = searchParams.get("startDate");

  const [currentTabIdx, setCurrentTabIdx] = useState(0);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [masils, setMasils] = useState(dummyMasils);

  /**
   * @func1 탭 클릭 시 상태 변경 (calender, list)
   * @func2 캘린더 월 이동 시 그 월에 해당하는 산책 기록을 캘린더에 출력
   * @func3 캘린더 일자 클릭 시 해당 일자의 산책 기록을 담은 바텀시트 출력
   * @func4 각 산책 기록을 클릭하면 해당 산책 기록 id의 logDetail 페이지로 이동
   */
  return { currentTabIdx, setCurrentTabIdx, date, setDate, isSheetOpen, setIsSheetOpen, masils };
};

export default useMasilDiaryController;
