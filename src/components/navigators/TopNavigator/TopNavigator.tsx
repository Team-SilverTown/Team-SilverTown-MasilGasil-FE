"use client";

import React, { ReactNode } from "react";

import * as S from "./TopNavigator.styles";

interface TopNavigatorProps {
  leftChildren?: ReactNode;
  rightChildren?: ReactNode;
  title?: string;
}

const TopNavigator = ({ leftChildren, rightChildren, title }: TopNavigatorProps) => {
  return (
    <S.TopNavigatorContainer>
      <S.TopNavLeftSection>{leftChildren}</S.TopNavLeftSection>
      <S.TopNavCenterSection>
        <h1>{title}</h1>
      </S.TopNavCenterSection>
      <S.TobNavRightSection>{rightChildren}</S.TobNavRightSection>
    </S.TopNavigatorContainer>
  );
};

export default TopNavigator;
