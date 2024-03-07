"use client";

import { useState } from "react";

const useMateCreateModel = () => {
  const [isFormFilled, setIsFormFilled] = useState<boolean>(false);
  const [selectedPersonnel, setSelectedPersonnel] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState<Date | null>(null);

  return {
    isFormFilled,
    setIsFormFilled,
    selectedPersonnel,
    setSelectedPersonnel,
    startDate,
    setStartDate,
    startTime,
    setStartTime,
  };
};

export default useMateCreateModel;
