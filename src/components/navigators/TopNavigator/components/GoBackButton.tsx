"use client";

import React, { useCallback } from "react";

import { Button } from "@/components";
import { ChevronLeft } from "@/components/icons";

import { useRouter } from "next/navigation";

interface GoBackButtonProps {
  onGoBackHandler?: () => void;
}

const GoBackButton = ({ onGoBackHandler }: GoBackButtonProps) => {
  const router = useRouter();

  const goBackHandler = useCallback(() => {
    if (!onGoBackHandler) {
      router.back();
    } else {
      onGoBackHandler();
    }
  }, [onGoBackHandler]);

  return (
    <Button
      variant="naked"
      onClickHandler={goBackHandler}
    >
      <ChevronLeft />
    </Button>
  );
};

export default GoBackButton;
