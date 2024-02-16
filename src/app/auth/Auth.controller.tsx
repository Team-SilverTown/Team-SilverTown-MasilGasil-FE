"use client";

import React, { useMemo, useRef } from "react";
import { FieldErrors, useForm } from "react-hook-form";

import useAuthModel from "./Auth.model";
import AuthView from "./Auth.view";
import { AuthStep1, AuthStep2, AuthStep3, AuthStep4 } from "./sections";

export interface AuthFormProps {
  nickname: string;
  sex?: "male" | "female";
  birthDate?: number;
  height?: number;
  weight?: number;
  exerciseIntensity?: "SUPER_LOW" | "LOW" | "MIDDLE" | "HIGH" | "SUPER_HIGH";
  policy1: boolean;
  policy2: boolean;
  policy3: boolean;
}

const AuthController = () => {
  const { focusedStep, setFocusedStep } = useAuthModel();
  const prevFocusedStep = useRef(focusedStep);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<AuthFormProps>({
    mode: "onChange",
    shouldUnregister: false,
  });

  const onValid = (data: AuthFormProps) => {
    console.log("valid Action", data);
  };

  const onInvalid = (errors: FieldErrors) => {
    console.log("Invalid Action", errors);
  };

  // step1 - 유저네임의 유효성, 중복 여부를 확인 합니다
  const isStep1Validate = useMemo(() => {
    // TODO:
    // 중복 확인에 대한 여부도 포함해야합니다.
    if (!getValues("nickname") || !!errors.nickname?.message) return false;
    else return true;
  }, [getValues("nickname"), errors?.nickname?.message]);

  // 각 step 별 유효성 검사 결과 boolean 값을 가지고 있습니다.
  const stepValidations = [isStep1Validate, true, true, true];

  const nextButtonClickHandler = () => {
    if (focusedStep >= stepViews.length - 1) return;

    prevFocusedStep.current = focusedStep;
    setFocusedStep((focusedStep) => focusedStep + 1);
  };

  // 테스트용
  const prevButtonClickHandler = () => {
    if (focusedStep === 0) return;

    prevFocusedStep.current = focusedStep;
    setFocusedStep((focusedStep) => focusedStep - 1);
  };

  const stepViews = [
    <AuthStep1
      register={register}
      errors={errors}
    />,
    <AuthStep2 />,
    <AuthStep3 />,
    <AuthStep4 />,
  ];

  return (
    <AuthView
      stepViews={stepViews}
      focusedStep={focusedStep}
      prevFocusedStep={prevFocusedStep.current}
      onNextButtonHandler={nextButtonClickHandler}
      onPrevButtonHandler={prevButtonClickHandler}
      handleSubmit={handleSubmit}
      onValid={onValid}
      onInvalid={onInvalid}
      stepValidations={stepValidations}
    />
  );
};

export default AuthController;
