"use client";

import style from "./AuthButtonAnimation.module.css";

import React, { useEffect, useMemo } from "react";

import { Button } from "@/components";
import { Message } from "@/components/icons";
import useLoadingSpinnerStore from "@/lib/stores/ui/useLoadingSpinnerStore";
import useAuthStore from "@/lib/stores/useAuthStore";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const { isLogIn } = useAuthStore();
  const router = useRouter();
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
      <>
        <div className={`${style.fadeAnimation} absolute bottom-[20%] left-0 w-full opacity-0`}>
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
            <span className="text-large font-medium ">카카오 로그인</span>
          </Button>
        </div>
        <div
          className={`${style.fadeAnimation} absolute bottom-[calc(20%-65px)] left-0 w-full opacity-0`}
        >
          <Button
            buttonColor={"#f3f4f6"}
            width={"calc(100% -   30px)"}
            style={{ margin: "auto", borderRadius: 12, padding: "1.8rem 1.5rem" }}
            useRipple
            onClickHandler={() => {
              router.replace("/home");
            }}
          >
            <span className="text-large font-medium ">로그인없이 시작하기</span>
          </Button>
        </div>
      </>
    );
  }

  return null;
};

export default AuthButton;
