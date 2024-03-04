"use client";

import { UseFormRegister } from "react-hook-form";

import { Input, Textarea } from "@/components";
import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";
import { StepButton } from "@/app/signin/components";
import * as GS from "@/styles/GlobalStyle";

import * as S from "./MateCreate.styles";
import { MateCreateProps } from "./MateCreate.controller";

interface MateCreateViewProps {
  register: UseFormRegister<MateCreateProps>;
  handleSubmit: () => void;
  isFormFilled: boolean;
}

const MateCreateView = ({ register, handleSubmit, isFormFilled }: MateCreateViewProps) => {
  return (
    <S.MateCreateContainer>
      <TopNavigator
        title="메이트 모집하기"
        leftChildren={<GoBackButton />}
      />

      <GS.CommonContainer>
        <S.TitleSection>
          <S.Title>제목</S.Title>
          <Input
            type="text"
            placeholder="제목을 입력해주세요."
            register={register("title")}
            style={{
              lineHeight: "2rem",
              width: "100%",
              fontSize: "1.5rem",
            }}
          />
        </S.TitleSection>

        <S.ContentSection>
          <S.Title>설명</S.Title>
          <Textarea
            placeholder="설명을 입력해주세요."
            register={register("content")}
          />
        </S.ContentSection>

        <S.LocationSection>
          <S.Title>위치</S.Title>
          <Input
            type="text"
            placeholder={"모이는 위치를 입력해주세요."}
            register={register("location")}
            style={{
              lineHeight: "2rem",
              width: "100%",
              fontSize: "1.5rem",
            }}
          />
        </S.LocationSection>

        <S.DateSection>
          <S.Title>희망 날짜</S.Title>
          <Input
            type="text"
            placeholder={"날짜를 입력해주세요."}
            register={register("date")}
            style={{
              lineHeight: "2rem",
              width: "100%",
              fontSize: "1.5rem",
            }}
          />
        </S.DateSection>

        <S.FlexContainer>
          <S.TimeSection>
            <S.Title>희망 시간</S.Title>
            <Input
              type="text"
              placeholder={"시간을 입력해주세요."}
              register={register("time")}
              style={{
                lineHeight: "2rem",
                width: "100%",
                fontSize: "1.5rem",
              }}
            />
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
