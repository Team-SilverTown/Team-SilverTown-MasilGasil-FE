"use client";

import React, { useEffect } from "react";
import { FieldErrors, UseFormSetValue, UseFormRegister } from "react-hook-form";

import useTheme from "@/lib/hooks/useTheme";

import { Button, Input, InputLabel } from "@/components";
import { SignInFormProps } from "../SignIn.controller";
import useSignInModel from "../SignIn.model";
import * as S from "../SignIn.styles";

interface SignInStep2Props {
  setValue: UseFormSetValue<SignInFormProps>;
  register: UseFormRegister<SignInFormProps>;
  errors: FieldErrors<SignInFormProps>;
}

const sexOptions: Array<{
  label: string;
  value: "male" | "female";
}> = [
  { label: "남성", value: "male" },
  { label: "여성", value: "female" },
];

const birthDateValidation = {
  required: "나이는 필수 항목입니다.",
  min: {
    message: "14세 이상이어야 합니다",
    value: 14,
  },
  max: {
    message: "100세 이하여야 합니다",
    value: 100,
  },
  // TODO: 동작하게 만들어야함.
  // pattern: {
  //   message: "숫자만 입력 가능합니다",
  //   value: /^[0-9]+$/,
  // },
};

const createInput = (
  register: UseFormRegister<SignInFormProps>,
  name: keyof SignInFormProps,
  validation: {},
  placeholder: string,
) => (
  <Input
    required
    type="number"
    register={register(name, validation)}
    placeholder={placeholder}
    style={{
      fontSize: "1.5rem",
      lineHeight: "2rem",
      margin: "1.4rem 0",
      width: "100%",
    }}
  />
);

const renderInputLabel = (error: any) => {
  if (error) {
    return (
      <InputLabel
        type="danger"
        text={error.message}
        fontSize={"1.5rem"}
        style={{ position: "absolute" }}
      />
    );
  }
};

const SignInStep2 = ({ setValue, register, errors }: SignInStep2Props) => {
  const theme = useTheme();

  const { selectedSex, setSelectedSex } = useSignInModel();
  useEffect(() => {
    if (selectedSex) setValue("sex", selectedSex);
  }, [setValue, selectedSex]);

  const handleSexSelect = (sex: "male" | "female") => {
    setSelectedSex(sex);
    setValue("sex", sex);
    console.log(sex);
  };

  const birthDateInput = createInput(
    register,
    "birthDate",
    birthDateValidation,
    "만 나이를 입력해주세요.",
  );
  const heightInput = createInput(
    register,
    "height",
    { required: "키는 필수 항목입니다." },
    "키를 입력해주세요.",
  );
  const weightInput = createInput(
    register,
    "weight",
    { required: "체중은 필수 항목입니다." },
    "체중을 입력해주세요.",
  );

  return (
    <div className="h-full">
      <S.GenderSection>
        <S.Title>성별</S.Title>
        <S.GenderButtonGroup>
          {sexOptions.map((option) => (
            <Button
              key={option.value}
              onClick={() => handleSexSelect(option.value)}
              style={{
                width: "50%",
                backgroundColor:
                  selectedSex === option.value ? theme?.green_500 : theme?.transparent_10,
                cursor: "pointer",
              }}
            >
              {option.label}
            </Button>
          ))}
        </S.GenderButtonGroup>
      </S.GenderSection>

      <S.BirthDateSection>
        <S.BirthDateTitleWrapper>
          <S.Title style={{ width: "4.5rem" }}>나이</S.Title>
          <InputLabel
            text="14 ~ 100 사이의 값만 입력할 수 있어요!"
            style={{ color: theme?.gray_200 }}
          />
        </S.BirthDateTitleWrapper>
        {birthDateInput}
        {renderInputLabel(errors?.birthDate)}
      </S.BirthDateSection>

      <S.PhysicalSection>
        <S.PhysicalGroup>
          <S.Title>키</S.Title>
          {heightInput}
          {renderInputLabel(errors?.height)}
        </S.PhysicalGroup>
        <S.PhysicalGroup>
          <S.Title>체중</S.Title>
          {weightInput}
          {renderInputLabel(errors?.weight)}
        </S.PhysicalGroup>
      </S.PhysicalSection>
    </div>
  );
};

export default SignInStep2;
