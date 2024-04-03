"use client";

import * as S from "./Input.styles";

import React, { CSSProperties, InputHTMLAttributes } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
  isInvalid?: boolean;
  required?: boolean;
  width?: string | number;
  style?: CSSProperties;
  [key: string]: any;
}

const Input = ({
  className,
  kind = "text",
  register,
  required = false,
  isInvalid,
  width,
  style,
  ...rest
}: InputProps) => {
  return (
    <S.InputComponent
      required={required}
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck="false"
      style={{ width, ...style }}
      $isInvalid={isInvalid}
      {...register}
      {...rest}
    />
  );
};

export default Input;
