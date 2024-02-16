"use client";

import React, { ReactNode } from "react";
import { FieldErrors, UseFormHandleSubmit } from "react-hook-form";

import * as GS from "@/styles/GlobalStyle";
import { Button } from "@/components";

import { AuthHelper, StepButton, StepLayout } from "./components";
import { AuthFormProps } from "./Auth.controller";

interface AuthViewProps {
  stepViews: ReactNode[];
  focusedStep: number;
  prevFocusedStep: number;
  onPrevButtonHandler: () => void;
  onNextButtonHandler: () => void;
  handleSubmit: UseFormHandleSubmit<AuthFormProps, AuthFormProps>;
  onValid: (data: AuthFormProps) => void;
  onInvalid: (errors: FieldErrors) => void;
  stepValidations: boolean[];
}

const AuthView = ({
  stepViews,
  focusedStep,
  prevFocusedStep,
  onNextButtonHandler,
  onPrevButtonHandler,
  handleSubmit,
  onValid,
  onInvalid,
  stepValidations,
}: AuthViewProps) => {
  return (
    <GS.CommonContainer>
      <div className="relative w-full h-full">
        <AuthHelper index={focusedStep} />
        {stepViews && (
          <StepLayout
            focusedStep={focusedStep}
            prevFocusedStep={prevFocusedStep}
            stepViews={stepViews}
            style={{ height: "calc(100% - 200px)", position: "relative" }}
          />
        )}
        <Button onClickHandler={onPrevButtonHandler}>이전</Button>
        <StepButton
          buttonText={focusedStep === 3 ? "마실가실 시작하기" : "다음"}
          onClickHandler={
            focusedStep === 3 ? handleSubmit(onValid, onInvalid) : onNextButtonHandler
          }
          isDisabled={!stepValidations[focusedStep]}
        />
      </div>
    </GS.CommonContainer>
  );
};

export default AuthView;
