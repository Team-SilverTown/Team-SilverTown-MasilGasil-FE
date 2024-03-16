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
  } = useMateCreateModel();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<MateCreateProps>({
    mode: "onChange",
  });

  const watchedFields = watch();

  useEffect(() => {
    const allFieldsFilled = !!(
      watchedFields.title &&
      watchedFields.content &&
      thumbnail &&
      startDate &&
      startTime &&
      selectedPersonnel &&
      locationDetail
    );
    setIsFormFilled(allFieldsFilled);
  }, [watchedFields, thumbnail, startDate, startTime, selectedPersonnel, locationDetail]);

  const handleUpdateThumbnail = (file: File | null) => {
    setThumbnail(file);
  };

  const handlePersonnelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPersonnel(event.target.value);
  };

  const handleLocationSubmit = ({ detail }: { detail: string }) => {
    setLocationDetail(detail);
  };

  const onValid = (data: MateCreateProps) => {
    const date = startDate
      ? new Date(startDate.getTime() - startDate.getTimezoneOffset() * 60000)
          .toISOString()
          .substring(0, 10)
      : "";
    const time = startTime ? startTime.toISOString().substring(11, 19) : "";
    const gatheringAt = `${date}T${time}.000Z`;

    const completeData = {
      ...data,
      thumbnail,
      gatheringAt,
      selectedPersonnel,
      locationDetail,
    };
  };

  const onInvalid = (errors: any) => {};

  return (
    <MateCreateView
      register={register}
      handleSubmit={handleSubmit(onValid, onInvalid)}
      isFormFilled={isFormFilled}
      updateThumbnail={handleUpdateThumbnail}
      handlePersonnelChange={handlePersonnelChange}
      startDate={startDate}
      setStartDate={setStartDate}
      startTime={startTime}
      setStartTime={setStartTime}
      selectedPersonnel={selectedPersonnel}
      locationDetail={locationDetail}
      onLocationSubmit={handleLocationSubmit}
    />
  );
};

export default MateCreateController;
