"use client";

import { useState } from "react";

const useMateCreateModel = () => {
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [selectedPersonnel, setSelectedPersonnel] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);

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
