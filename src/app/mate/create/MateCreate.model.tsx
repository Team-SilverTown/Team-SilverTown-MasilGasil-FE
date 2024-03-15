"use client";

import { useState } from "react";

const useMateCreateModel = () => {
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [isFormFilled, setIsFormFilled] = useState<boolean>(false);
  const [selectedPersonnel, setSelectedPersonnel] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [locationDetail, setLocationDetail] = useState("");

  return {
    thumbnail,
    setThumbnail,
    isFormFilled,
    setIsFormFilled,
    selectedPersonnel,
    setSelectedPersonnel,
    startDate,
    setStartDate,
    startTime,
    setStartTime,
    locationDetail,
    setLocationDetail,
  };
};

export default useMateCreateModel;
