"use client";

import React from "react";
import { SubTitle, Title } from "./SignUpHelper.style";

interface SignUpHelperProps {
  index: number;
}

const helperContent = [
  {
    title: <Title>마실가실에서 사용할 닉네임을 입력해주세요.</Title>,
    subTitle: null,
  },
  {
    title: <Title>추가 정보 입력하기</Title>,
    subTitle: (
      <SubTitle>추가 정보를 통해 산책으로 소모한 칼로리 정보를 제공받을 수 있어요.</SubTitle>
    ),
  },
  {
    title: <Title>추가 정보 입력하기</Title>,
    subTitle: <SubTitle>추가 정보에 입력된 정보를 토대로 기초 대사량을 계산해요.</SubTitle>,
  },
  {
    title: <Title>사용자 약관</Title>,
    subTitle: null,
  },
];

const SignUpHelper = ({ index }: SignUpHelperProps) => {
  const { title, subTitle } = helperContent[index];

  return (
    <section
      key={index}
      className="text-2xl h-[100px] flex flex-col justify-center space-y-5 "
    >
      {title}
      {subTitle}
    </section>
  );
};

export default SignUpHelper;
