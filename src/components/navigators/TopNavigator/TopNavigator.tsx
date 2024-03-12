"use client";

import React, { CSSProperties, ReactNode, useEffect, useState } from "react";
import throttle from "lodash.throttle";

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
  const [isScrolled, setIsScrolled] = useState(false);

  // SCROLL EVENT ======================================= //
  useEffect(() => {
    const handleScroll = throttle(() => {
      const offset = 0;
      const { scrollTop } = document.documentElement;
      const scrolled = scrollTop > offset;

      if (isScrolled !== scrolled) {
        setIsScrolled(scrolled);
      }
    }, 200);

    const target = document.getElementById("common-container");

    console.log(target);

    // target.addEventListener("scroll", () => console.log("!!"));

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // ======================================= SCROLL EVENT //

  return (
    <S.TopNavigatorContainer $scrolled={isScrolled}>
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
