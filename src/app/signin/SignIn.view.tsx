"use client";

import React, { ReactNode } from "react";
import { FieldErrors, UseFormHandleSubmit } from "react-hook-form";

import * as GS from "@/styles/GlobalStyle";

import { SignInHelper, StepButton, StepLayout } from "./components";
import { SignInFormProps } from "./SignIn.controller";
import { NAV_HEIGHT } from "@/styles/theme";

interface SignInViewProps {
  stepViews: ReactNode[];
  focusedStep: number;
  prevFocusedStep: number;
  onNextButtonHandler: () => void;
  handleSubmit: UseFormHandleSubmit<SignInFormProps, SignInFormProps>;
  onValid: (data: SignInFormProps) => void;
  onInvalid: (errors: FieldErrors) => void;
  stepValidations: boolean[];
}

const SignInView = ({
  stepViews,
  focusedStep,
  prevFocusedStep,
  onNextButtonHandler,
  handleSubmit,
  onValid,
  onInvalid,
  stepValidations,
}: SignInViewProps) => {
  return (
    <GS.CommonContainer>
      <SignInHelper index={focusedStep} />
      {stepViews && (
        <StepLayout
          focusedStep={focusedStep}
          prevFocusedStep={prevFocusedStep}
          stepViews={stepViews}
          style={{ height: `calc(100% - 165px)`, position: "relative" }}
        />
      )}
      <StepButton
        buttonText={focusedStep === 3 ? "마실가실 시작하기" : "다음"}
        onClickHandler={focusedStep === 3 ? handleSubmit(onValid, onInvalid) : onNextButtonHandler}
        isDisabled={!stepValidations[focusedStep]}
      />
    </GS.CommonContainer>
  );
};

export default SignInView;
