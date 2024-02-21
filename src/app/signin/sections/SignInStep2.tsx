"use client";

import { FieldErrors, UseFormSetValue, UseFormRegister } from "react-hook-form";

import useTheme from "@/lib/hooks/useTheme";

import { Button, Input, InputLabel } from "@/components";
import { SignInFormProps } from "../SignIn.controller";
import useSignInModel from "../SignIn.model";
import * as S from "../SignIn.styles";

interface SignInStep2Props {
  setValue: UseFormSetValue<SignInFormProps>;
  register: UseFormRegister<SignInFormProps>;
  errors: FieldErrors<SignInFormProps>;
}

const sexOptions: Array<{
  label: string;
  value: "male" | "female";
}> = [
  { label: "남성", value: "male" },
  { label: "여성", value: "female" },
];

const SignInStep2 = ({ setValue, register, errors }: SignInStep2Props) => {
  const theme = useTheme();

  const { selectedSex, setSelectedSex } = useSignInModel();

  const handleSexSelect = (sex: "male" | "female") => {
    setSelectedSex(sex);
    setValue("sex", sex);
  };

  return (
    <div className="h-full">
      <S.GenderSection>
        <S.Title>성별</S.Title>
        <S.GenderButtonGroup>
          {sexOptions.map((option) => (
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
          <InputLabel
            text="14 ~ 100 사이의 값만 입력할 수 있어요!"
            style={{ color: theme?.gray_200 }}
          />
        </S.BirthDateTitleWrapper>
        <Input
          required
          type="number"
          register={register("birthDate", {
            required: "나이는 필수 항목입니다.",
            min: {
              message: "14세 이상이어야 합니다",
              value: 14,
            },
            max: {
              message: "100세 이하여야 합니다",
              value: 100,
            },
            // TODO: 동작하게 만들어야함
            // pattern: {
            //   message: "숫자만 입력 가능합니다",
            //   value: /^[0-9]+$/,
            // },
          })}
          placeholder="만 나이를 입력해주세요."
          style={{
            fontSize: "1.5rem",
            lineHeight: "2rem",
            margin: "1.4rem 0",
          }}
        />
        <InputLabel
          type="danger"
          text={errors?.birthDate?.message}
          fontSize={"1.5rem"}
          style={{ position: "absolute" }}
        />
      </S.BirthDateSection>

      <S.PhysicalSection>
        <S.PhysicalGroup>
          <S.Title>키</S.Title>
          <Input
            required
            type="number"
            register={register("height", { required: "키는 필수 항목입니다." })}
            placeholder="키를 입력해주세요."
            style={{
              fontSize: "1.5rem",
              lineHeight: "2rem",
              margin: "1.4rem 0",
            }}
          />
          <InputLabel
            type="danger"
            text={errors?.height?.message}
            fontSize={"1.5rem"}
            style={{ position: "absolute" }}
          />
        </S.PhysicalGroup>
        <S.PhysicalGroup>
          <S.Title>체중</S.Title>
          <Input
            required
            type="number"
            register={register("weight", { required: "체중은 필수 항목입니다." })}
            placeholder="체중을 입력해주세요."
            style={{
              fontSize: "1.5rem",
              lineHeight: "2rem",
              margin: "1.4rem 0",
            }}
          />
          <InputLabel
            type="danger"
            text={errors?.weight?.message}
            fontSize={"1.5rem"}
            style={{ position: "absolute" }}
          />
        </S.PhysicalGroup>
      </S.PhysicalSection>
    </div>
  );
};

export default SignInStep2;
