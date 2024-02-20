"use client";

import React from "react";

import useTheme from "@/lib/hooks/useTheme";
import * as GS from "@/styles/GlobalStyle";
import { Button } from "@/components";

import * as S from "./Main.styles";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import Link from "next/link";

interface MainViewProps {
  loading: boolean;
}

const MainView = ({ loading }: MainViewProps) => {
  const theme = useTheme();

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
      {!loading && (
        <S.AuthButtonWrapper>
          <Button
            buttonColor={theme?.yellow_500}
            width={"calc(100% - 30px)"}
            style={{ margin: "auto" }}
          >
            <Link href={"/home"}>
              <span
                style={{
                  fontSize: FONT_SIZE.LARGE,
                  fontWeight: FONT_WEIGHT.BOLD,
                  color: theme?.white_100,
                }}
              >
                카카오로 시작하기
              </span>
            </Link>
          </Button>
        </S.AuthButtonWrapper>
      )}
    </GS.CommonContainer>
  );
};

export default MainView;
