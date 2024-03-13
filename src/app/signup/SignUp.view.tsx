"use client";

import React, { ReactNode } from "react";
import { FieldErrors, UseFormHandleSubmit } from "react-hook-form";

import * as GS from "@/styles/GlobalStyle";
import { StepLayout } from "@/components";

import { SignUpHelper, StepButton } from "./components";
import { SignUpFormProps } from "./SignUp.controller";

interface SignUpViewProps {
  stepViews: ReactNode[];
  focusedStep: number;
  prevFocusedStep: number;
  onNextButtonHandler: () => void;
  handleSubmit: UseFormHandleSubmit<SignUpFormProps, SignUpFormProps>;
  onValid: (data: SignUpFormProps) => void;
  onInvalid: (errors: FieldErrors) => void;
  stepValidations: boolean[];
}

const SignUpView = ({
  stepViews,
  focusedStep,
  prevFocusedStep,
  onNextButtonHandler,
  handleSubmit,
  onValid,
  onInvalid,
  stepValidations,
}: SignUpViewProps) => {
  return (
    <GS.CommonContainer>
      <SignUpHelper index={focusedStep} />
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

export default SignUpView;
