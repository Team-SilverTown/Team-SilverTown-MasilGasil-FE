"use client";

import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

import { UserEditInput } from "@/components";
import { USER_INPUT_PLACEHOLDER } from "@/lib/constants/userConstants";

import { SignUpFormProps } from "../SignUp.controller";

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
        onFocus={(e: { target: { type: string } }) => (e.target.type = "date")}
        onBlur={(e: { target: { type: string } }) => (e.target.type = "text")}
      />
    </div>
  );
};

export default SignUpStep2;
