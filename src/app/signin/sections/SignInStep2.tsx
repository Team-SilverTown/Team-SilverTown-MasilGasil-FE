"use client";

import React, { useState } from "react";
import { UseFormSetValue } from "react-hook-form";

import { Button } from "@/components";
import useTheme from "@/lib/hooks/useTheme";

import { SignInFormProps } from "../SignIn.controller";
import * as S from "../SignIn.styles";

interface SignInStep2Props {
  setValue: UseFormSetValue<SignInFormProps>;
}

const SignInStep2 = ({ setValue }: SignInStep2Props) => {
  const [selectedSex, setSelectedSex] = useState<"male" | "female" | null>(null);
  const theme = useTheme();

  const handleSexSelect = (sex: "male" | "female") => {
    setSelectedSex(sex);
    setValue("sex", sex);
  };

  return (
    <div className="h-full flex flex-col">
      <S.GenderSection>
        <S.GenderTitle>성별</S.GenderTitle>
        <S.GenderButtonGroup>
          <Button
            onClick={() => handleSexSelect("male")}
            style={{
              width: "50%",
              backgroundColor: selectedSex === "male" ? theme?.green_500 : theme?.gray_200,
            }}
          >
            남성
          </Button>
          <Button
            onClick={() => handleSexSelect("female")}
            style={{
              width: "50%",
              backgroundColor: selectedSex === "female" ? theme?.green_500 : theme?.gray_200,
            }}
          >
            여성
          </Button>
        </S.GenderButtonGroup>
      </S.GenderSection>
    </div>
  );
};

export default SignInStep2;
