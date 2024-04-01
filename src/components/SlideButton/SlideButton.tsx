"use client";

import * as S from "./SlideButton.style";

import React, { CSSProperties, ReactNode, useEffect, useRef } from "react";

import { PanInfo, useAnimate, useMotionValue, useTransform } from "framer-motion";

interface SlideButtonProps {
  buttonColor?: string;
  textColor?: string;
  subButtonColor?: string;
  subTextColor?: string;
  children: ReactNode | string;
  subChildren: ReactNode | string;
  width?: string | number;
  height?: string | number;
  subButtonWidth?: number;
  style?: CSSProperties;
  onButtonClickHandler?: () => void;
  onSubButtonClickHandler?: () => void;
  [key: string]: any;
}

const SlideButton = ({
  children,
  subChildren,
  buttonColor,
  textColor,
  onButtonClickHandler = () => null,
  onSubButtonClickHandler = () => null,
  subButtonColor,
  subTextColor,
  width,
  height,
  subButtonWidth = 90,
  style,
}: SlideButtonProps) => {
  const [scope, animate] = useAnimate();
  const x = useMotionValue(0);
  const btnOpacity = useTransform(x, [-(subButtonWidth - 10), -15], [1, 0]);

  const isDragging = useRef(false);
  const isSlideOpen = useRef(false);

  function handleDragStart() {
    isDragging.current = true;
  }

  useEffect(() => {
    x.set(0);
  }, []);

  const handleDrag = (event: any, info: PanInfo) => {
    const offset = info.offset.x;

    if (offset > 0) {
      x.set(0);
      isSlideOpen.current = false;
      return;
    }

    x.set(Math.max(offset, -(subButtonWidth - 10)));
  };

  const handleDragEnd = (event: any, info: PanInfo) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -((subButtonWidth - 10) / 2) || velocity < -500) {
      animate(x, -(subButtonWidth - 10), { duration: 0.5 });
      isSlideOpen.current = true;
    } else {
      animate(x, 0, { duration: 0.5 });
      isSlideOpen.current = false;
    }

    isDragging.current = false;
  };

  const handleButtonClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    if (isSlideOpen.current) {
      isSlideOpen.current = false;
      animate(x, 0, { duration: 0.5 });
      return;
    }

    if (!isDragging.current) onButtonClickHandler();
  };

  const handleSubButtonClick = () => {
    if (!isSlideOpen.current) return;

    isSlideOpen.current = false;
    animate(x, 0, { duration: 0.5 });
    onSubButtonClickHandler();
  };

  return (
    <S.ButtonWrapper
      style={{ width, height, ...style }}
      whileTap={{ cursor: "grabbing" }}
      transition={{ type: "spring", stiffness: 600, damping: 30 }}
    >
      <S.MainButton
        ref={scope}
        onClick={handleButtonClick}
        drag="x"
        dragDirectionLock
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        dragMomentum={false}
        dragPropagation={false}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        style={{ x }}
        $buttonColor={buttonColor}
        $textColor={textColor}
      >
        {children}
      </S.MainButton>
      <S.SubButton
        style={{ opacity: btnOpacity }}
        onClick={handleSubButtonClick}
        $width={subButtonWidth}
        $subButtonColor={subButtonColor}
        $subTextColor={subTextColor}
      >
        {subChildren}
      </S.SubButton>
    </S.ButtonWrapper>
  );
};

export default SlideButton;
