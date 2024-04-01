import * as S from "../SignUp.styles";

import React from "react";
import { UseFormGetValues, UseFormRegister } from "react-hook-form";

import { UserIntensityItem } from "@/components";
import { INTENSITY_OPTIONS } from "@/lib/constants/variable";

import { SignUpFormProps } from "../SignUp.controller";

interface SignUpStep4Props {
  register: UseFormRegister<SignUpFormProps>;
  getValues: UseFormGetValues<SignUpFormProps>;
}

const SignUpStep4 = ({ getValues, register }: SignUpStep4Props) => {
  const selectedIntensity = getValues("exerciseIntensity");

  return (
    <div className="w-full h-full">
      <S.ExerciseIntensityTitleSection>
        <S.Title style={{ marginBottom: "1.2rem" }}>평소 운동 강도</S.Title>
        기초 대사량 계산에 필요한 활동 계수를 설정해요.
      </S.ExerciseIntensityTitleSection>

      <S.ExerciseIntensityOptionList>
        {INTENSITY_OPTIONS.map(({ label, value }) => (
          <UserIntensityItem
            key={value}
            value={value}
            optionDescription={label}
            isSelected={selectedIntensity === value}
            register={register("exerciseIntensity")}
          />
        ))}
      </S.ExerciseIntensityOptionList>
    </div>
  );
};

export default SignUpStep4;
