"use client";

import React, { useEffect, useMemo } from "react";
import { signIn } from "next-auth/react";

import useTheme from "@/lib/hooks/useTheme";
import useAuthStore from "@/stores/useAuthStore";
import useLoadingSpinnerStore from "@/stores/ui/useLoadingSpinnerStore";
import { Button } from "@/components";
import kakao_login from "@/assets/kakao_login.png";

import * as S from "./AuthButton.styles";
import Image from "next/image";
import { Message } from "@/components/icons";

const AuthButton = () => {
  const theme = useTheme();

  const { isLogIn } = useAuthStore();
  const { showLoadingSpinner, closeLoadingSpinner } = useLoadingSpinnerStore();

  const show = useMemo(() => {
    if (typeof isLogIn === "boolean" && !isLogIn) {
      return true;
    } else {
      return false;
    }
  }, [isLogIn]);

  useEffect(() => {
    return () => closeLoadingSpinner();
  }, []);

  useEffect(() => {}, [isLogIn]);

  if (show) {
    return (
      <S.AuthButtonWrapper>
        <Button
          buttonColor={"#FEE500"}
          width={"calc(100% -   30px)"}
          style={{ margin: "auto", borderRadius: 12, padding: "1.8rem 1.5rem" }}
          useRipple
          onClickHandler={() => {
            showLoadingSpinner();
            signIn("kakao", { redirect: true, callbackUrl: "/auth/kakao" });
          }}
        >
          <Message className="w-7 h-7 mr-2" />
          <S.ButtonContent>카카오 로그인</S.ButtonContent>
        </Button>
      </S.AuthButtonWrapper>
    );
  }

  return null;
};

export default AuthButton;
