"use client";

import React, { CSSProperties, ReactNode } from "react";

import * as S from "./TopNavigator.styles";

interface TopNavigatorProps {
  leftChildren?: ReactNode;
  rightChildren?: ReactNode;
  leftSectionStyle?: CSSProperties;
  rightSectionStyle?: CSSProperties;
  title?: string;
}

const TopNavigator = ({
  leftChildren,
  rightChildren,
  leftSectionStyle,
  rightSectionStyle,
  title,
}: TopNavigatorProps) => {
  return (
    <S.TopNavigatorContainer>
      <S.TopNavLeftSection style={{ ...leftSectionStyle }}>{leftChildren}</S.TopNavLeftSection>
      {title && (
        <S.TopNavCenterSection>
          <h1>{title}</h1>
        </S.TopNavCenterSection>
      )}
      <S.TobNavRightSection style={{ ...rightSectionStyle }}>{rightChildren}</S.TobNavRightSection>
    </S.TopNavigatorContainer>
  );
};

export default TopNavigator;
