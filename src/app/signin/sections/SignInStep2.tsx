"use client";

import React from "react";
import { UseFormSetValue } from "react-hook-form";

import { Button } from "@/components";
import useTheme from "@/lib/hooks/useTheme";

import { SignInFormProps } from "../SignIn.controller";

interface SignInStep2Props {
  setValue: UseFormSetValue<SignInFormProps>;
}

const SignInStep2 = ({ setValue }: SignInStep2Props) => {
  const theme = useTheme();

  const maleButtonClick = () => {
    setValue("sex", "male");
  };

  const femaleButtonClick = () => {
    setValue("sex", "female");
  };

  return (
    <div className="bg-yellow-300 h-full">
      SignInStep2
      <Button
        onClickHandler={maleButtonClick}
        buttonColor={theme?.green_500}
      >
        남성
      </Button>
      <Button onClickHandler={femaleButtonClick}>여성</Button>
    </div>
  );
};

export default SignInStep2;
