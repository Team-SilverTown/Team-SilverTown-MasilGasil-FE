"use client";

import React from "react";
import { FieldErrors, UseFormSetValue, UseFormRegister, UseFormGetValues } from "react-hook-form";

import { UserEditInput } from "@/components";
import { SignUpFormProps } from "../SignUp.controller";
import * as S from "../SignUp.styles";

import { USER_INPUT_PLACEHOLDER } from "@/lib/constants/userConstants";

interface SignUpStep2Props {
  register: UseFormRegister<SignUpFormProps>;
  errors: FieldErrors<SignUpFormProps>;
}

const SignUpStep2 = ({ register, errors }: SignUpStep2Props) => {
  return (
    <div className="h-full">
      <UserEditInput
        title={"나이"}
        description="만 13세 이상부터 이용 가능합니다."
        inputType={"date"}
        placeholder={USER_INPUT_PLACEHOLDER.BIRTH_DATE}
        register={register("birthDate")}
        errorsMessage={errors.birthDate && errors.birthDate.message}
      />
    </div>
  );
};

export default SignUpStep2;
