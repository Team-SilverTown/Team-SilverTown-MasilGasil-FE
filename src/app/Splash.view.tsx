"use client";

import React from "react";

import * as GS from "@/styles/GlobalStyle";
import * as S from "./Splash.styles";

const SplashView = () => {
  return (
    <GS.CommonContainer
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <S.ObjectOne />
      <S.ObjectTwo />
      <S.ObjectThree />
      <S.TitleWrapper>
        <S.H1>마실가실</S.H1>
      </S.TitleWrapper>
    </GS.CommonContainer>
  );
};

export default SplashView;
