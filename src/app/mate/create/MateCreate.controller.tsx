"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import useMateCreateModel from "./MateCreate.model";
import MateCreateView from "./MateCreate.view";
import { MateCreateRequest } from "@/types/Request";
import { DEFAULT_MATE_CREATE_VALUE } from "./MateCreate.constants";

const MateCreateController = () => {
  const {
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
  } = useMateCreateModel();

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<MateCreateRequest>({
    mode: "onChange",
    defaultValues: DEFAULT_MATE_CREATE_VALUE,
  });

  const watchedFields = watch();

  useEffect(() => {
    const allFieldsFilled = !!(
      watchedFields.title &&
      watchedFields.content &&
      startDate &&
      startTime &&
      capacity &&
      gatheringPlaceDetail
    );
    setIsFormFilled(allFieldsFilled);
  }, [watchedFields, startDate, startTime, setCapacity, gatheringPlaceDetail]);

  // TODO : 추후 useEffect가아닌 별도 핸들러로 변경될 수 있또록 변경
  useEffect(() => {
    const date = startDate
      ? new Date(startDate.getTime() - startDate.getTimezoneOffset() * 60000)
          .toISOString()
          .substring(0, 10)
      : ""; // startDate는 00시 기준이니까 한국에 맞게 수정
    const time = startTime ? startTime.toISOString().substring(11, 19) : "";
    const gatheringAt = `${date}T${time}.000Z`;

    setValue("gatheringAt", gatheringAt);
  }, [startDate, startTime]);

  const handleCapacityChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = target;
    setCapacity(value);
    setValue("capacity", Number(value));
  };

  const handleGatheringPlaceSubmit = ({ detail }: { detail: string }) => {
    setGatheringPlaceDetail(detail);
    setValue("gatheringPlaceDetail", detail);
  };

  const onValid = (data: MateCreateRequest) => {
    console.log(data);
  };

  const onInvalid = (errors: any) => {
    console.log("Form Errors:", errors);
  };

  return (
    <MateCreateView
      register={register}
      handleSubmit={handleSubmit(onValid, onInvalid)}
      isFormFilled={isFormFilled}
      handleCapacityChange={handleCapacityChange}
      startDate={startDate}
      setStartDate={setStartDate}
      startTime={startTime}
      setStartTime={setStartTime}
      capacity={capacity}
      gatheringPlaceDetail={gatheringPlaceDetail}
      handleGatheringPlaceSubmit={handleGatheringPlaceSubmit}
    />
  );
};

export default MateCreateController;
