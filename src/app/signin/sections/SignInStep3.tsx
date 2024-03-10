import React from "react";
import { UseFormSetValue, UseFormGetValues } from "react-hook-form";

import { Button } from "@/components";
import { Check } from "@/components/icons";
import useTheme from "@/lib/hooks/useTheme";

import { SignInFormProps } from "../SignIn.controller";
import * as S from "../SignIn.styles";
import { INTENSITY_OPTIONS } from "@/constants/variable";

interface SignInStep3Props {
  setValue: UseFormSetValue<SignInFormProps>;
  getValues: UseFormGetValues<SignInFormProps>;
}

const SignInStep3 = ({ getValues, setValue }: SignInStep3Props) => {
  const theme = useTheme();
  const selectedIntensity = getValues("exerciseIntensity");

  const handleSelectIntensity = (value: any) => {
    setValue("exerciseIntensity", value);
  };

  return (
    <div className="h-full">
      <S.ExerciseIntensityTitleSection>
        <S.Title style={{ marginBottom: "1.2rem" }}>평소 운동 강도</S.Title>
        기초 대사량 계산에 필요한 활동 계수를 설정해요.
      </S.ExerciseIntensityTitleSection>
      {INTENSITY_OPTIONS.map((option, index) => (
        <S.ExerciseIntensityOption key={index}>
          <Button
            id={option.value}
            variant="neumorp"
            onClickHandler={() => handleSelectIntensity(option.value)}
            style={{
              width: "3rem",
              height: "3rem",
              padding: 0,
              backgroundColor:
                selectedIntensity === option.value ? theme?.green_500 : theme?.transparent_10,
              borderRadius: 999,
            }}
          >
            <Check
              className={`w-6 h-6 mx-auto my-auto transition-colors`}
              stroke={selectedIntensity === option.value ? theme?.white_100 : theme?.gray_300}
              strokeWidth={3.5}
            />
          </Button>
          <S.RadioCircle>{option.label}</S.RadioCircle>
        </S.ExerciseIntensityOption>
      ))}
    </div>
  );
};

export default SignInStep3;
