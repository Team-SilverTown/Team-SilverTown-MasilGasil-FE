import React from "react";
import { signIn } from "next-auth/react";

import useTheme from "@/lib/hooks/useTheme";
import * as GS from "@/styles/GlobalStyle";
import { Button } from "@/components";

import * as S from "./Main.styles";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";

interface MainViewProps {
  isLogIn: boolean;
}

const MainView = ({ isLogIn }: MainViewProps) => {
  const theme = useTheme();

  return (
    <GS.CommonContainer>
      <S.ObjectOne />
      <S.ObjectTwo />
      <S.ObjectThree />
      <S.TitleWrapper>
        <S.H1>마실가실</S.H1>
      </S.TitleWrapper>
      {!isLogIn && (
        <S.AuthButtonWrapper>
          <Button
            buttonColor={theme?.yellow_500}
            width={"calc(100% - 30px)"}
            style={{ margin: "auto" }}
            useRipple
            onClickHandler={() => signIn("kakao", { redirect: true, callbackUrl: "/auth/kakao" })}
          >
            <span
              style={{
                fontSize: FONT_SIZE.LARGE,
                fontWeight: FONT_WEIGHT.BOLD,
                color: theme?.white_100,
              }}
            >
              카카오로 시작하기
            </span>
          </Button>
        </S.AuthButtonWrapper>
      )}
    </GS.CommonContainer>
  );
};

export default MainView;
