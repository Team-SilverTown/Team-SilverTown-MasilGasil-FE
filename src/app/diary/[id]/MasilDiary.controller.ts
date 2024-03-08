"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import dummyMasils from "./dummyMasils.json";
import { MasilProps } from "./components/MasilDiarySheet/MasilDiarySheet";
import { debounce } from "lodash";

const useMasilDiaryController = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const startDateParam = searchParams.get("startDate");
  const params = useParams<{ id: string }>();
  const id = params.id;

  const [currentTabIdx, setCurrentTabIdx] = useState(0);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [masils, setMasils] = useState(dummyMasils);
  const [dailyMasils, setDailyMasils] = useState<MasilProps[] | null>(null);
  const [monthlyMasils, setMonthlyMasils] = useState<Date[]>([]);

  useEffect(() => {
    const selectedDate = date?.toLocaleDateString("en-CA"); // yyyy-mm-dd
    const tempDailyMasils = masils.contents.filter((m) => m.date === selectedDate);
    const tempMothlyMasils = masils.contents.map((m) => new Date(m.date));

    if (tempDailyMasils[0]) {
      setDailyMasils(tempDailyMasils[0]?.masils);
    } else {
      setDailyMasils(null);
    }

    setMonthlyMasils(tempMothlyMasils);
  }, [date]);

  useEffect(() => {
    if (startDateParam) {
      setDate(new Date(startDateParam));
    }
  }, [startDateParam]);

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

  const delayedPush = useCallback(
    debounce((id, startDate) => {
      console.log(startDate);
      return router.push(`/diary/${id}?startDate=${startDate}`);
    }, 600),
    [],
  );

  /**
   * @function handleChangeMonth
   * @param day
   * @breif 선택한 날짜를 갱신합니다. 월 단위로 변경되며, 변경된 값을 Query Params로 넘겨줍니다.
   */
  const handleChangeMonth = (day: Date | undefined) => {
    if (day) {
      setDate(day);
      const startDate = day.toLocaleDateString("en-CA");

      delayedPush(id, startDate);
    }
  };

  // TODO: 쿼리 파라미터를 조회하여 서버에 GET 요청, 해당 기간의 로그 기록 데이터를 받아옴
  // TODO: View는 로그 기록 데이터를 프롭으로 받고, 내부에서 처리
  return {
    date,
    isSheetOpen,
    currentTabIdx,
    masils,
    dailyMasils,
    monthlyMasils,
    setDate,
    setIsSheetOpen,
    setCurrentTabIdx,
    setDailyMasils,
    handleSelectDate,
    handleChangeMonth,
  };
};

export default useMasilDiaryController;
