"use client";

import style from "./AuthButtonAnimation.module.css";

import React from "react";

import { Button } from "@/components";
import { Message } from "@/components/icons";
import useLoadingSpinnerStore from "@/lib/stores/ui/useLoadingSpinnerStore";

import { useRouter } from "next/navigation";

const NonAuthButton = () => {
  const router = useRouter();

  return (
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
  );
};

export default NonAuthButton;
