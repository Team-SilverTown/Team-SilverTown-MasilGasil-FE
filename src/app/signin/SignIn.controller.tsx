"use client";

import React, { useMemo, useRef } from "react";
import { FieldErrors, useForm } from "react-hook-form";

import useSignInModel from "./SignIn.model";
import SignInView from "./SignIn.view";
import { SignInStep1, SignInStep2, SignInStep3, SignInStep4 } from "./sections";

export interface SignInFormProps {
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

const SignInController = () => {
  const { focusedStep, setFocusedStep } = useSignInModel();
  const prevFocusedStep = useRef(focusedStep);

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<SignInFormProps>({
    mode: "onChange",
    shouldUnregister: false,
  });

  const onValid = (data: SignInFormProps) => {
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
  }, [getValues(), errors]);

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
    <SignInStep1
      register={register}
      errors={errors}
    />,
    <SignInStep2 setValue={setValue} />,
    <SignInStep3 />,
    <SignInStep4
      getValues={getValues}
      setValue={setValue}
    />,
  ];

  return (
    <SignInView
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

export default SignInController;
