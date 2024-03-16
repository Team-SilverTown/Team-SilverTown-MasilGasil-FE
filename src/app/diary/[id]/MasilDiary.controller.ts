"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";
import { useQuery } from "@tanstack/react-query";
import getMasilsByPeriod from "@/lib/api/MasilDiary/getMasilsByPeriod";
import { MasilsByPeriod, MasilsByPeriodResponse } from "@/types/Response";
import { MASIL_KEY } from "@/lib/api/queryKeys";

const useMasilDiaryController = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const startDateParam = searchParams.get("startDate");
  const { id } = useParams<{ id: string }>();

  const [currentTabIdx, setCurrentTabIdx] = useState(0);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [dailyMasils, setDailyMasils] = useState<MasilsByPeriod[] | null>(null);
  const [monthlyMasils, setMonthlyMasils] = useState<MasilsByPeriod[] | null>(null);
  const [monthlyMasilsDate, setMonthlyMasilsDate] = useState<Date[]>([]);

  const { data: masilData, isLoading } = useQuery<MasilsByPeriodResponse>({
    queryKey: [MASIL_KEY.MASILS_PERIOD_GET, startDateParam],
    queryFn: () => getMasilsByPeriod({ startDate: startDateParam, endDate: null }),
    refetchOnMount: true,
    staleTime: 1000 * 60,
  });

  /**
   * @useEffect
   * @deps masilData
   * @brief 서버에서 조회한 기간별 마실 기록을 일,월 기준으로 필터링합니다. 필터링한 결과를 dailyMasils, monthlyMasils에 할당합니다.
   */
  useEffect(() => {
    const [year, month, day] = [date?.getFullYear(), date?.getMonth(), date?.getDate()];
    const selectedDate = `${year}-${month !== undefined && month + 1 < 10 ? "0" : ""}${month !== undefined && month + 1}-${day !== undefined && day < 10 ? "0" : ""}${day}`;

    if (!masilData || masilData.masils.length <= 0) {
      setDailyMasils(null);
      setMonthlyMasils(null);
      setMonthlyMasilsDate([]);
      return;
    }

    const tempDailyMasils = masilData.masils.filter((m) => m.date === selectedDate)[0]
      ? masilData.masils.filter((m) => m.date === selectedDate)[0].masils
      : undefined;

    const tempMonthlyMasils = masilData.masils
      .map((m) => m.masils)
      .flat()
      .filter((e): e is MasilsByPeriod => e !== undefined);

    const tempMothlyMasilsDate = masilData.masils
      .map((m) => m.date && new Date(m.date))
      .filter((e): e is Date => e !== undefined && e !== "");

    if (tempDailyMasils) {
      setDailyMasils(tempDailyMasils);
    } else {
      setDailyMasils(null);
    }
    if (tempMonthlyMasils) {
      setMonthlyMasils(tempMonthlyMasils);
    } else {
      setMonthlyMasils(null);
    }
    if (tempMothlyMasilsDate) {
      setMonthlyMasilsDate(tempMothlyMasilsDate);
    }
  }, [masilData, date]);

  /**
   * @useEffect
   * @deps startDateParam
   * @brief 쿼리스트링을 통해 받아오는 startDateParam가 변경될 때마다 date를 갱신합니다. date는 캘린더 컴포넌트가 표시할 날짜를 결정합니다.
   */
  useEffect(() => {
    setDate(startDateParam ? new Date(startDateParam) : new Date());
  }, [startDateParam]);

  /**
   * @function handleSelectDate
   * @param day
   * @breif 선택한 날짜를 갱신합니다. 일 단위로 변경되며, BottomSheet를 열어 해당 일자의 산책 기록을 보여줍니다.
   */
  const handleSelectDate = useCallback((day: Date | undefined) => {
    if (day) {
      setDate(day);
    }
    setIsSheetOpen(true);
  }, []);

  const delayedPush = useCallback(
    debounce((id, startDate) => {
      return router.push(`/diary/${id}?startDate=${startDate}`);
    }, 300),
    [router],
  );

  /**
   * @function handleChangeMonth
   * @param day
   * @breif 선택한 날짜를 갱신합니다. 월 단위로 변경되며, 변경된 값을 Query Params로 넘겨줍니다.
   */
  const handleChangeMonth = useCallback(
    (changedMonth: Date | undefined) => {
      if (changedMonth) {
        const [year, month] = [changedMonth?.getFullYear(), changedMonth?.getMonth()];
        const selectedDate = `${year}-${month !== undefined && month + 1 < 10 ? "0" : ""}${month !== undefined && month + 1}-01`;

        setDate(changedMonth);
        delayedPush(id, selectedDate);
      }
    },
    [delayedPush, id],
  );

  /**
   * @function handleClickToday
   * @breif 현재 시각으로 날짜를 갱신합니다.
   */
  const handleClickToday = useCallback(() => {
    router.push(`/diary/${id}?startDate=`);
    setDate(new Date());
  }, [router, id]);

  return {
    masilData,
    date,
    isSheetOpen,
    currentTabIdx,
    dailyMasils,
    monthlyMasils,
    monthlyMasilsDate,
    setDate,
    setIsSheetOpen,
    setCurrentTabIdx,
    setDailyMasils,
    handleSelectDate,
    handleChangeMonth,
    handleClickToday,
  };
};

export default useMasilDiaryController;
