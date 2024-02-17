import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

import useTheme from "@/lib/hooks/useTheme";

import { Button, Input, InputLabel } from "@/components";
import { SignInFormProps } from "../SignIn.controller";

interface SignInStep1Props {
  register: UseFormRegister<SignInFormProps>;
  errors: FieldErrors<SignInFormProps>;
}

const SignInStep1 = ({ register, errors }: SignInStep1Props) => {
  const theme = useTheme();

  return (
    <div className="h-full">
      <div className="flex space-x-4">
        <div className="relative w-[75%] space-y-2">
          <Input
            required
            register={register("nickname", {
              required: "NickName is required",
              minLength: {
                message: "NickName Should be longer then 2 chars",
                value: 2,
              },
            })}
            placeholder="닉네임을 입력해주세요."
            style={{
              fontSize: "1.5rem",
              lineHeight: "2rem",
            }}
          />
          <InputLabel
            type="danger"
            text={errors?.nickname?.message}
            fontSize={"1.5rem"}
            style={{ position: "absolute" }}
          />
        </div>
        <Button
          buttonColor={theme?.green_500}
          textColor={theme?.text_secondary_color}
          width={"20%"}
          useRipple
          rippleColor={theme?.text_secondary_color + 50}
        >
          <span className="text-2xl font-bold">중복 확인 하기</span>
        </Button>
      </div>
    </div>
  );
};

export default SignInStep1;
