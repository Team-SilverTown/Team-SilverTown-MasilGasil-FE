"use client";

import React, { useEffect } from "react";
import { FieldErrors, UseFormSetValue, UseFormRegister, UseFormGetValues } from "react-hook-form";

import useTheme from "@/lib/hooks/useTheme";

import { Button, UserEditInput } from "@/components";
import { SignUpFormProps } from "../SignUp.controller";
import useSignUpModel from "../SignUp.model";
import * as S from "../SignUp.styles";

import { SEX_OPTIONS } from "@/lib/constants/variable";
import { USER_INPUT_PLACEHOLDER, validation_user } from "@/lib/constants/userConstants";

interface SignUpStep2Props {
  getValues: UseFormGetValues<SignUpFormProps>;
  setValue: UseFormSetValue<SignUpFormProps>;
  register: UseFormRegister<SignUpFormProps>;
  errors: FieldErrors<SignUpFormProps>;
}

const SignUpStep2 = ({ getValues, setValue, register, errors }: SignUpStep2Props) => {
  const theme = useTheme();

  useEffect(() => {
    const initState = getValues("sex");
    if (initState) {
      setSelectedSex(initState);
    }
  }, []);

  const { selectedSex, setSelectedSex } = useSignUpModel();
  useEffect(() => {
    if (selectedSex) setValue("sex", selectedSex);
  }, [setValue, selectedSex]);

  const handleSexSelect = (sex: "MALE" | "FEMALE") => {
    setSelectedSex(sex);
    setValue("sex", sex);
  };

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
        <UserEditInput
          title={"나이"}
          description="만 13세 이상부터 이용 가능합니다."
          inputType={"date"}
          placeholder={USER_INPUT_PLACEHOLDER.BIRTH_DATE}
          register={register("birthDate")}
          errorsMessage={errors.birthDate && errors.birthDate.message}
        />
      </S.BirthDateSection>

      <S.PhysicalSection>
        <S.PhysicalGroup>
          <UserEditInput
            title={"키"}
            unit={"cm"}
            inputType={"number"}
            placeholder={USER_INPUT_PLACEHOLDER.HEIGHT}
            errorsMessage={errors.height && errors.height.message}
            register={register("height", validation_user.height)}
          />
        </S.PhysicalGroup>
        <S.PhysicalGroup>
          <UserEditInput
            title={"몸무게"}
            unit={"kg"}
            inputType={"number"}
            placeholder={USER_INPUT_PLACEHOLDER.WEIGHT}
            errorsMessage={errors.weight && errors.weight.message}
            register={register("weight", validation_user.weight)}
          />
        </S.PhysicalGroup>
      </S.PhysicalSection>
    </div>
  );
};

export default SignUpStep2;