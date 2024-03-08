import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

import useTheme from "@/lib/hooks/useTheme";

import { Button, Input, InputLabel } from "@/components";
import { SignInFormProps } from "../SignIn.controller";
import { validation_user } from "@/lib/constants/userConstants";

interface SignInStep1Props {
  register: UseFormRegister<SignInFormProps>;
  errors: FieldErrors<SignInFormProps>;
}

const SignInStep1 = ({ register, errors }: SignInStep1Props) => {
  const theme = useTheme();

  return (
    <div className="h-full">
      <div className="flex justify-between space-x-4">
        <div className="relative flex-1 space-y-2">
          <Input
            required
            register={register("nickname", validation_user.nickname)}
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
          useRipple
          rippleColor={theme?.text_secondary_color + 50}
        >
          <span className="text-2xl font-bold">중복 확인</span>
        </Button>
      </div>
    </div>
  );
};

export default SignInStep1;
