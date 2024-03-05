"use client";

import { UseFormRegister } from "react-hook-form";

import { Input, Textarea } from "@/components";
import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";
import { StepButton } from "@/app/signin/components";
import * as GS from "@/styles/GlobalStyle";

import * as S from "./MateCreate.styles";
import { MateCreateProps } from "./MateCreate.controller";

import { CalendarDatePicker, OptionTimePicker } from "./components";

interface MateCreateViewProps {
  register: UseFormRegister<MateCreateProps>;
  handleSubmit: () => void;
  isFormFilled: boolean;
}

const regularFields = [
  { title: "제목", placeholder: "제목을 입력해주세요.", name: "title" },
  { title: "설명", type: "textarea", placeholder: "설명을 입력해주세요.", name: "content" },
  { title: "위치", placeholder: "모이는 위치를 입력해주세요.", name: "location" },
  { title: "희망 날짜", placeholder: "날짜를 입력해주세요.", name: "date" },
];

const MateCreateView = ({ register, handleSubmit, isFormFilled }: MateCreateViewProps) => {
  return (
    <S.MateCreateContainer>
      <TopNavigator
        title="메이트 모집하기"
        leftChildren={<GoBackButton />}
      />

      <GS.CommonContainer>
        {regularFields.map((field, index) => (
          <S.Section>
            <S.Title>{field.title}</S.Title>
            {field.type === "textarea" && field.name !== "date" && (
              <Textarea
                placeholder={field.placeholder}
                register={register(field.name)}
                style={{
                  fontSize: "1.5rem",
                }}
              />
            )}
            {field.type !== "textarea" && field.name !== "date" && (
              <Input
                placeholder={field.placeholder}
                register={register(field.name)}
                style={{
                  lineHeight: "2rem",
                  fontSize: "1.5rem",
                }}
              />
            )}
            {field.name === "date" && <CalendarDatePicker />}
          </S.Section>
        ))}

        <S.FlexContainer>
          <S.TimeSection>
            <S.Title>희망 시간</S.Title>
            <OptionTimePicker />
          </S.TimeSection>

          <S.PersonnelSection>
            <S.Title>모집 인원</S.Title>
            <Input
              type="number"
              placeholder={"모집 인원을 입력해주세요."}
              register={register("personnel")}
              style={{
                lineHeight: "2rem",
                width: "100%",
                fontSize: "1.5rem",
              }}
            />
          </S.PersonnelSection>
        </S.FlexContainer>

        <StepButton
          buttonText={"메이트 모집하기"}
          onClickHandler={handleSubmit}
          isDisabled={!isFormFilled}
        />
      </GS.CommonContainer>
    </S.MateCreateContainer>
  );
};

export default MateCreateView;
