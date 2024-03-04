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
    console.log("Form Data:", data);
  };

  const onInvalid = (errors: any) => {
    console.log("Form Errors:", errors);
  };

  const { isFormFilled, setIsFormFilled } = useMateCreateModel();

  const watchedFields = watch();

  useEffect(() => {
    const allFieldsFilled = Object.values(watchedFields).every((field) => field);
    setIsFormFilled(allFieldsFilled);
  }, [watchedFields]);

  return (
    <MateCreateView
      register={register}
      handleSubmit={handleSubmit(onValid, onInvalid)}
      isFormFilled={isFormFilled}
    />
  );
};

export default MateCreateController;
