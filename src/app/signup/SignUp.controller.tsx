"use client";

import React, { useEffect, useMemo, useRef } from "react";
import { FieldErrors, useForm } from "react-hook-form";

import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton, StepSkipButton } from "@/components/navigators/TopNavigator/components";
import { checkDuplicateNickname } from "@/lib/api/User/client";
import { validation_user } from "@/lib/constants/userConstants";
import useEventQuery from "@/lib/hooks/useEventQuery";
import useLoadingSpinnerStore from "@/lib/stores/ui/useLoadingSpinnerStore";
import { calculateAge } from "@/lib/utils";
import { SignUpRequest } from "@/types/Request/User";
import { CheckNickNameResponse } from "@/types/Response";

import useSignUpModel from "./SignUp.model";
import SignUpView from "./SignUp.view";
import { SignUpStep1, SignUpStep2, SignUpStep3, SignUpStep4, SignUpStep5 } from "./sections";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export interface SignUpFormProps extends SignUpRequest {}

export const LAST_STEP_INDEX = 4;

const SignUpController = () => {
  const router = useRouter();

  const { focusedStep, setFocusedStep, nickNameConfirm, setNickNameConfirm, signUpMutation } =
    useSignUpModel();
  const { showLoadingSpinner } = useLoadingSpinnerStore();

  const prevFocusedStep = useRef(focusedStep);

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    watch,
    setError,
    formState: { errors },
  } = useForm<SignUpFormProps>({
    mode: "onChange",
    shouldUnregister: false,
    defaultValues: {
      isAllowingMarketing: true,
      isPersonalInfoConsented: false,
      isLocationInfoConsented: false,
      isUnderAgeConsentConfirmed: false,
    },
  });

  const onValid = (data: SignUpFormProps) => {
    showLoadingSpinner();
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
  } = useEventQuery<CheckNickNameResponse>({
    key: ["me"],
    queryFn: async () => await checkDuplicateNickname(name),
  });

  useEffect(() => {
    setNickNameConfirm(false);
  }, [name]);

  useEffect(() => {
    if (!duplicatedResult) return;

    if (!duplicatedResult.isDuplicated) {
      setNickNameConfirm(true);
    } else {
      setError("nickname", { type: "custom", message: "이미 사용중인 닉네임 입니다." });
      setNickNameConfirm(false);
    }
  }, [duplicatedResult]);

  /** 사용자 나이 확인 */
  const birthDate = getValues("birthDate");

  const userAgeConfirm = useMemo(() => {
    if (birthDate) {
      const userAge = calculateAge(birthDate);

      if (userAge >= 13 && userAge <= 100) return true;

      if (userAge < 13) {
        setError("birthDate", { type: "custom", message: validation_user.birthDate.min.message });
      }
      if (userAge > 100) {
        setError("birthDate", { type: "custom", message: validation_user.birthDate.max.message });
      }

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
    const checkBirthDate =
      !getValues("birthDate") || !userAgeConfirm || !!errors?.birthDate?.message;

    if (checkBirthDate) return false;
    return true;
  }, [getValues(), errors]);

  const isStep3Validate = useMemo(() => {
    const checkSex = !getValues("sex") || !!errors?.sex?.message;
    const checkHeight = !getValues("height") || !!errors?.height?.message;
    const checkWeight = !getValues("weight") || !!errors?.weight?.message;

    if (checkSex || checkHeight || checkWeight) return false;
    return true;
  }, [getValues(), errors]);

  const isStep4Validate = useMemo(() => {
    if (!getValues("exerciseIntensity")) return false;
    return true;
  }, [getValues(), errors]);

  const isStep5Validate = useMemo(() => {
    if (
      !getValues("isPersonalInfoConsented") ||
      !getValues("isLocationInfoConsented") ||
      !getValues("isUnderAgeConsentConfirmed")
    )
      return false;
    else return true;
  }, [watch()]);

  // 각 step 별 유효성 검사 결과 boolean 값을 가지고 있습니다.
  const stepValidations = [
    isStep1Validate,
    isStep2Validate,
    isStep3Validate,
    isStep4Validate,
    isStep5Validate,
  ];

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
    2: () => {
      setValue("sex", undefined);
      setValue("height", undefined);
      setValue("weight", undefined);
    },
    3: () => {
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
    <SignUpStep1
      register={register}
      errors={errors}
      nickNameConfirm={nickNameConfirm}
      isDuplicateLoading={isDuplicateLoading}
      duplicateRefetch={duplicateRefetch}
    />,
    <SignUpStep2
      register={register}
      errors={errors}
    />,
    <SignUpStep3
      getValues={getValues}
      setValue={setValue}
      register={register}
      errors={errors}
    />,
    <SignUpStep4
      getValues={getValues}
      register={register}
    />,
    <SignUpStep5
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
          focusedStep === 1 ||
          (focusedStep !== LAST_STEP_INDEX && (
            <StepSkipButton onSkipHandler={() => nextButtonClickHandler(true)} />
          ))
        }
        title="회원가입"
      />
      <SignUpView
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

export default SignUpController;
