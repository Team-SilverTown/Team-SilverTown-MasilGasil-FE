"use client";

import React, { useEffect } from "react";
import { FieldErrors, UseFormSetValue, UseFormRegister } from "react-hook-form";

import useTheme from "@/lib/hooks/useTheme";

import { Button, Input, InputLabel } from "@/components";
import { SignInFormProps } from "../SignIn.controller";
import useSignInModel from "../SignIn.model";
import { SEX_OPTIONS } from "../SignIn.constants";
import * as S from "../SignIn.styles";

interface SignInStep2Props {
  setValue: UseFormSetValue<SignInFormProps>;
  register: UseFormRegister<SignInFormProps>;
  errors: FieldErrors<SignInFormProps>;
}

interface CreateInputProps {
  register: UseFormRegister<SignInFormProps>;
  name: keyof SignInFormProps;
  validation: {};
  placeholder: string;
  unit?: string;
}

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

const createInput = ({ register, name, validation, placeholder, unit }: CreateInputProps) => (
  <S.InputWrapper>
    <Input
      type="number"
      register={register(name, validation)}
      placeholder={placeholder}
      style={{
        lineHeight: "2rem",
        margin: "1.4rem 0",
        width: "100%",
        fontSize: "1.5rem",
      }}
    />
    {unit && <S.UnitLabel>{unit}</S.UnitLabel>}
  </S.InputWrapper>
);

const renderInputLabel = (error?: any, text?: string, style?: any) => {
  return (
    <InputLabel
      type={error ? "danger" : undefined}
      text={error ? error.message : text}
      fontSize="1.5rem"
      style={{ position: "absolute", ...style }}
    />
  );
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
  };

  const birthDateInput = createInput({
    register,
    name: "birthDate",
    validation: birthDateValidation,
    placeholder: "만 나이를 입력해주세요.",
  });
  const heightInput = createInput({
    register,
    name: "height",
    validation: { required: "키는 필수 항목입니다." },
    placeholder: "키를 입력해주세요.",
    unit: "cm",
  });
  const weightInput = createInput({
    register,
    name: "weight",
    validation: { required: "체중은 필수 항목입니다." },
    placeholder: "체중을 입력해주세요.",
    unit: "kg",
  });

  return (
    <div className="h-full">
      <S.GenderSection>
        <S.Title>성별</S.Title>
        <S.GenderButtonGroup>
          {SEX_OPTIONS.map((option) => (
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
          {renderInputLabel(null, "14 ~ 100 사이의 값만 입력할 수 있어요!", {
            color: theme?.gray_200,
            marginLeft: "4.5rem",
          })}
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
