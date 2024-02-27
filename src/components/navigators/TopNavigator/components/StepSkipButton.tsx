"use client";

import React from "react";

import { Button } from "@/components";
import * as S from "../TopNavigator.styles";

interface StepSkipButtonProps {
  onSkipHandler?: () => void;
}

const StepSkipButton = ({ onSkipHandler }: StepSkipButtonProps) => {
  return (
    <Button
      variant="naked"
      onClickHandler={onSkipHandler}
    >
      <S.SkipText>건너뛰기</S.SkipText>
    </Button>
  );
};

export default StepSkipButton;
