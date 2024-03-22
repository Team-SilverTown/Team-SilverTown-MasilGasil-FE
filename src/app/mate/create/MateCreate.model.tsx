"use client";
import { useState } from "react";

const useMateCreateModel = () => {
  const [isFormFilled, setIsFormFilled] = useState<boolean>(false);
  const [capacity, setCapacity] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [gatheringPlaceDetail, setGatheringPlaceDetail] = useState("");

  return {
    isFormFilled,
    setIsFormFilled,
    capacity,
    setCapacity,
    startDate,
    setStartDate,
    startTime,
    setStartTime,
    gatheringPlaceDetail,
    setGatheringPlaceDetail,
  };
};

export default useMateCreateModel;
