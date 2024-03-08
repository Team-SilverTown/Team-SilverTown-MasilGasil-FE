"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import useMateCreateModel from "./MateCreate.model";
import MateCreateView from "./MateCreate.view";

export interface MateCreateProps {
  title: string;
  content: string;
  location: string;
  date: string;
  time: string;
  personnel: number;
}

const MateCreateController = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<MateCreateProps>({
    mode: "onChange",
  });

  const onValid = (data: MateCreateProps) => {
    const date = startDate
      ? new Date(startDate.getTime() - startDate.getTimezoneOffset() * 60000)
          .toISOString()
          .substring(0, 10)
      : ""; // startDate는 00시 기준이니까 한국에 맞게 수정
    const time = startTime ? startTime.toISOString().substring(11, 19) : "";
    const gatheringAt = `${date}T${time}.000Z`;

    const completeData = {
      ...data,
      startDate,
      startTime,
      gatheringAt,
      selectedPersonnel,
    };
    console.log("Complete Form Data:", completeData);
  };

  const onInvalid = (errors: any) => {
    console.log("Form Errors:", errors);
  };

  const {
    isFormFilled,
    setIsFormFilled,
    selectedPersonnel,
    setSelectedPersonnel,
    startDate,
    setStartDate,
    startTime,
    setStartTime,
  } = useMateCreateModel();

  const watchedFields = watch();

  useEffect(() => {
    const allFieldsFilled = !!(
      watchedFields.title &&
      watchedFields.content &&
      watchedFields.location &&
      startDate &&
      startTime &&
      selectedPersonnel
    );
    setIsFormFilled(allFieldsFilled);
  }, [watchedFields, startDate, startTime, selectedPersonnel]);

  const handlePersonnelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPersonnel(event.target.value);
  };

  return (
    <MateCreateView
      register={register}
      handleSubmit={handleSubmit(onValid, onInvalid)}
      isFormFilled={isFormFilled}
      handlePersonnelChange={handlePersonnelChange}
      startDate={startDate}
      setStartDate={setStartDate}
      startTime={startTime}
      setStartTime={setStartTime}
      selectedPersonnel={selectedPersonnel}
      setSelectedPersonnel={setSelectedPersonnel}
    />
  );
};

export default MateCreateController;
