"use client";

import React, { useMemo, useRef } from "react";
import { FieldErrors, useForm } from "react-hook-form";

import useSignInModel from "./SignIn.model";
import SignInView from "./SignIn.view";
import { SignInStep1, SignInStep2, SignInStep3, SignInStep4 } from "./sections";
import { TopNavigator } from "@/components/navigators/TopNavagtor";
import { GoBackButton, StepSkipButton } from "@/components/navigators/TopNavagtor/components";
import { useRouter } from "next/navigation";

export interface SignInFormProps {
  nickname: string;
  sex?: "male" | "female";
  birthDate?: number;
  height?: number;
  weight?: number;
  exerciseIntensity?: "SUPER_LOW" | "LOW" | "MIDDLE" | "HIGH" | "SUPER_HIGH";
  policy_personal: boolean;
  policy_location: boolean;
  policy_age: boolean;
}

const LAST_STEP_INDEX = 3;

const SignInController = () => {
  const router = useRouter();

  const { focusedStep, setFocusedStep } = useSignInModel();
  const prevFocusedStep = useRef(focusedStep);

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    watch,
    formState: { errors },
  } = useForm<SignInFormProps>({
    mode: "onChange",
    shouldUnregister: false,
    defaultValues: {
      policy_personal: false,
      policy_location: false,
      policy_age: false,
    },
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

  const isStep4Validate = useMemo(() => {
    if (!getValues("policy_personal") || !getValues("policy_location") || !getValues("policy_age"))
      return false;
    else return true;
  }, [watch()]);

  // 각 step 별 유효성 검사 결과 boolean 값을 가지고 있습니다.
  const stepValidations = [isStep1Validate, true, true, isStep4Validate];

  const nextButtonClickHandler = () => {
    if (focusedStep >= LAST_STEP_INDEX) return;

    prevFocusedStep.current = focusedStep;
    setFocusedStep((focusedStep) => focusedStep + 1);
  };

  // 테스트용
  const prevButtonClickHandler = () => {
    if (focusedStep === 0) {
      router.back();
      return;
    }

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
    <>
      <TopNavigator
        leftChildren={<GoBackButton onGoBackHandler={prevButtonClickHandler} />}
        rightChildren={
          focusedStep === 0 ||
          (focusedStep !== LAST_STEP_INDEX && (
            <StepSkipButton onSkipHandler={nextButtonClickHandler} />
          ))
        }
        title="회원가입"
      />
      <SignInView
        stepViews={stepViews}
        focusedStep={focusedStep}
        prevFocusedStep={prevFocusedStep.current}
        onNextButtonHandler={nextButtonClickHandler}
        handleSubmit={handleSubmit}
        onValid={onValid}
        onInvalid={onInvalid}
        stepValidations={stepValidations}
      />
    </>
  );
};

export default SignInController;
