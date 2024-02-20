"use client";

import React, { useState } from "react";
import { FieldErrors, UseFormSetValue, useForm, UseFormRegister } from "react-hook-form";

import useTheme from "@/lib/hooks/useTheme";

import { Button, Input, InputLabel } from "@/components";
import { SignInFormProps } from "../SignIn.controller";
import * as S from "../SignIn.styles";

interface SignInStep2Props {
  setValue: UseFormSetValue<SignInFormProps>;
  register: UseFormRegister<SignInFormProps>;
  errors: FieldErrors<SignInFormProps>;
}

const SignInStep2 = ({ setValue, register, errors }: SignInStep2Props) => {
  const theme = useTheme();
  const [selectedSex, setSelectedSex] = useState<"male" | "female" | null>(null);

  const handleSexSelect = (sex: "male" | "female") => {
    setSelectedSex(sex);
    setValue("sex", sex);
  };

  return (
    <div className="h-full">
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

      <S.BirthDateSection>
        <S.BirthDateTitleWrapper>
          <S.BirthDateTitle>나이</S.BirthDateTitle>
          <InputLabel
            text="14 ~ 100 사이의 값만 입력할 수 있어요!"
            style={{ color: theme?.gray_200 }}
          />
        </S.BirthDateTitleWrapper>
        <Input
          required
          type="number"
          register={register("birthDate", {
            required: "나이는 필수 값입니다.",
            min: {
              message: "14세 이상이어야 합니다",
              value: 14,
            },
            max: {
              message: "100세 이하여야 합니다",
              value: 100,
            },
            // TODO: 동작하게 만들어야함
            // pattern: {
            //   message: "숫자만 입력 가능합니다",
            //   value: /^[0-9]+$/,
            // },
          })}
          placeholder="만 나이를 입력해주세요."
          style={{
            fontSize: "1.5rem",
            lineHeight: "2rem",
            color: theme?.gray_500,
            margin: "1.4rem 0",
          }}
        />
        <InputLabel
          type="danger"
          text={errors?.birthDate?.message}
          fontSize={"1.5rem"}
          style={{ position: "absolute" }}
        />
      </S.BirthDateSection>
    </div>
  );
};

export default SignInStep2;
