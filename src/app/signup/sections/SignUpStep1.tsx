import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

import useTheme from "@/lib/hooks/useTheme";

import { Button, Input, InputLabel } from "@/components";
import { SignUpFormProps } from "../SignUp.controller";
import { validation_user } from "@/lib/constants/userConstants";

interface SignUpStep1Props {
  register: UseFormRegister<SignUpFormProps>;
  errors: FieldErrors<SignUpFormProps>;
  nickNameConfirm: boolean;
  isDuplicateLoading: boolean;
  duplicateRefetch: () => void;
}

const SignUpStep1 = ({
  register,
  errors,
  nickNameConfirm,
  isDuplicateLoading,
  duplicateRefetch,
}: SignUpStep1Props) => {
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
          {nickNameConfirm && (
            <InputLabel
              type="safety"
              text={"사용가능한 닉네임입니다."}
              fontSize={"1.5rem"}
              style={{ position: "absolute" }}
            />
          )}
          {errors?.nickname?.message && (
            <InputLabel
              type="danger"
              text={errors?.nickname?.message}
              fontSize={"1.5rem"}
              style={{ position: "absolute" }}
            />
          )}
        </div>

        <Button
          buttonColor={theme?.green_500}
          textColor={theme?.text_secondary_color}
          useRipple
          rippleColor={theme?.text_secondary_color + 50}
          onClickHandler={() => duplicateRefetch()}
          isLoading={isDuplicateLoading}
          disabled={isDuplicateLoading}
        >
          <span className="text-2xl font-bold">중복 확인</span>
        </Button>
      </div>
    </div>
  );
};

export default SignUpStep1;
