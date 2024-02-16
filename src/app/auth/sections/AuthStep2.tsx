"use client";

import React from "react";
import { UseFormSetValue } from "react-hook-form";
import { AuthFormProps } from "../Auth.controller";
import { Button } from "@/components";
import useTheme from "@/lib/hooks/useTheme";

interface AuthStep2Props {
  setValue: UseFormSetValue<AuthFormProps>;
}

const AuthStep2 = ({ setValue }: AuthStep2Props) => {
  const theme = useTheme();

  const maleButtonClick = () => {
    setValue("sex", "male");
  };

  const femaleButtonClick = () => {
    setValue("sex", "female");
  };

  return (
    <div className="bg-yellow-300 h-full">
      AuthStep2
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

export default AuthStep2;
