"use client";

import React, { useEffect, useMemo, useRef } from "react";
import { FieldErrors, useForm } from "react-hook-form";

import useSignInModel from "./SignIn.model";
import SignInView from "./SignIn.view";
import { SignInStep1, SignInStep2, SignInStep3, SignInStep4 } from "./sections";
import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton, StepSkipButton } from "@/components/navigators/TopNavigator/components";
import { useRouter } from "next/navigation";
import useEventQuery from "@/lib/hooks/useEventQuery";
import { checkDuplicateNickname } from "@/lib/api/User/client";
import { SignUpRequest } from "@/types/Request/User";

export interface SignInFormProps extends SignUpRequest {}

const LAST_STEP_INDEX = 3;

const SignInController = () => {
  const router = useRouter();

  const { focusedStep, setFocusedStep, nickNameConfirm, setNickNameConfirm, signUpMutation } =
    useSignInModel();
  const prevFocusedStep = useRef(focusedStep);

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    watch,
    setError,
    formState: { errors },
  } = useForm<SignInFormProps>({
    mode: "onChange",
    shouldUnregister: false,
    defaultValues: {
      isAllowingMarketing: true,
      isPersonalInfoConsented: false,
      isLocationInfoConsented: false,
      isUnderAgeConsentConfirmed: false,
    },
  });

  const onValid = (data: SignInFormProps) => {
    console.log("valid Action", data);
    signUpMutation.mutate(data);
  };

  const onInvalid = (errors: FieldErrors) => {
    console.log("Invalid Action", errors);
  };

  /** 유저 닉네임 중복 확인 */
  const name = getValues("nickname");
  const {
    data: duplicatedResult,
    isLoading: isDuplicateLoading,
    refetch: duplicateRefetch,
  } = useEventQuery({
    key: ["me"],
    queryFn: async () => await checkDuplicateNickname(name),
  });

  useEffect(() => {
    setNickNameConfirm(false);
  }, [name]);

  // console.log(typeof duplicatedResult, duplicatedResult);

  useEffect(() => {
    if (typeof duplicatedResult === "string") {
      setNickNameConfirm(true);
    } else {
      setError("nickname", { type: "custom", message: "이미 사용중인 닉네임 입니다." });
      setNickNameConfirm(false);
    }
  }, [duplicatedResult]);

  /** 사용자 나이 확인 */
  const birthDate = getValues("birthDate");
  const userAgeConfirm = useMemo(() => {
    // 유틸함수 머지 후 유틸 함수 사용
    const calculateAge = (birthDate: string): number => {
      const birthday = new Date(birthDate);
      const today = new Date();

      let age = today.getFullYear() - birthday.getFullYear();
      const monthDifference = today.getMonth() - birthday.getMonth();
      birthday;
      if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthday.getDate())) {
        age--;
      }

      return age;
    };

    if (birthDate) {
      const userAge = calculateAge(birthDate);
      console.log(userAge);
      if (userAge >= 13 && userAge <= 100) return true;

      if (userAge < 13)
        setError("birthDate", { type: "custom", message: "만 13세 이상이어야 합니다." });
      if (userAge > 100)
        setError("birthDate", { type: "custom", message: "만 100세 이하이어야 합니다." });

      return false;
    }
  }, [birthDate]);

  // step1 - 유저네임의 유효성, 중복 여부를 확인 합니다
  const isStep1Validate = useMemo(() => {
    if (!getValues("nickname") || !!errors.nickname?.message) return false;
    if (!nickNameConfirm) return false;
    else return true;
  }, [getValues(), errors, nickNameConfirm]);

  const isStep2Validate = useMemo(() => {
    const checkSex = !getValues("sex") || !!errors?.sex?.message;
    const checkBirthDate =
      !getValues("birthDate") || !userAgeConfirm || !!errors?.birthDate?.message;
    const checkHeight = !getValues("height") || !!errors?.height?.message;
    const checkWeight = !getValues("weight") || !!errors?.weight?.message;

    if (checkSex || checkBirthDate || checkHeight || checkWeight) return false;
    return true;
  }, [getValues(), errors]);

  const isStep3Validate = useMemo(() => {
    if (!getValues("exerciseIntensity")) return false;
    return true;
  }, [getValues(), errors]);

  const isStep4Validate = useMemo(() => {
    if (
      !getValues("isPersonalInfoConsented") ||
      !getValues("isLocationInfoConsented") ||
      !getValues("isUnderAgeConsentConfirmed")
    )
      return false;
    else return true;
  }, [watch()]);

  // 각 step 별 유효성 검사 결과 boolean 값을 가지고 있습니다.
  const stepValidations = [isStep1Validate, isStep2Validate, isStep3Validate, isStep4Validate];

  const nextButtonClickHandler = (isSkip = false) => {
    if (focusedStep >= LAST_STEP_INDEX) return;

    if (isSkip) {
      //@ts-ignore
      skipFunctions[focusedStep]();
    }

    prevFocusedStep.current = focusedStep;
    setFocusedStep((focusedStep) => focusedStep + 1);
  };

  const skipFunctions = {
    1: () => {
      setValue("sex", undefined);
      setValue("birthDate", undefined);
      setValue("height", undefined);
      setValue("weight", undefined);
    },
    2: () => {
      setValue("exerciseIntensity", undefined);
    },
  };

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
      nickNameConfirm={nickNameConfirm}
      isDuplicateLoading={isDuplicateLoading}
      duplicateRefetch={duplicateRefetch}
    />,
    <SignInStep2
      getValues={getValues}
      setValue={setValue}
      register={register}
      errors={errors}
    />,
    <SignInStep3
      getValues={getValues}
      register={register}
    />,
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
            <StepSkipButton onSkipHandler={() => nextButtonClickHandler(true)} />
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
