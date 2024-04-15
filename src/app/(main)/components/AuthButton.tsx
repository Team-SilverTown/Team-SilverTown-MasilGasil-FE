"use client";

import * as S from "./AuthButton.styles";

import React, { useEffect, useMemo } from "react";

import { Button } from "@/components";
import { Message } from "@/components/icons";
import useLoadingSpinnerStore from "@/lib/stores/ui/useLoadingSpinnerStore";
import useAuthStore from "@/lib/stores/useAuthStore";

import { signIn } from "next-auth/react";

const AuthButton = () => {
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
          <Message className="mr-2 h-7 w-7" />
          <span className="text-large font-medium text-black">카카오 로그인</span>
        </Button>
      </S.AuthButtonWrapper>
    );
  }

  return null;
};

export default AuthButton;
