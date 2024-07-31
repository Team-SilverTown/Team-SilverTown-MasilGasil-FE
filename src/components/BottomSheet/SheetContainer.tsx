"use client";

import styles from "./styles";

import * as React from "react";

import useTheme from "@/lib/hooks/useTheme";

import { MAX_HEIGHT } from "./constants";
import { useSheetContext } from "./context";
import { useEventCallbacks } from "./hooks";
import { SheetContainerProps } from "./types";
import { mergeRefs } from "./utils";

import { motion } from "framer-motion";

const SheetContainer = React.forwardRef<any, SheetContainerProps>(
  ({ children, style = {}, className = "", ...rest }, ref) => {
    const {
      y,
      isOpen,
      callbacks,
      snapPoints,
      initialSnap = 0,
      sheetRef,
      fixedHeight,
      windowHeight,
      detent,
      animationOptions,
      reduceMotion,
    } = useSheetContext();

    const theme = useTheme();

    const { handleAnimationComplete } = useEventCallbacks(isOpen, callbacks);
    const initialY = fixedHeight
      ? fixedHeight
      : snapPoints
        ? windowHeight - snapPoints[initialSnap]
        : 0;

    const maxSnapHeight = snapPoints ? snapPoints[0] : null;

    const height = maxSnapHeight !== null ? `min(${maxSnapHeight}px, ${MAX_HEIGHT})` : MAX_HEIGHT;

    return (
      <motion.div
        {...rest}
        ref={mergeRefs([sheetRef, ref])}
        className={`react-modal-sheet-container ${className}`}
        style={{
          backgroundColor: theme?.background_color,
          ...styles.container,
          ...style,
          ...(detent === "full-height" && { height }),
          ...(detent === "content-height" && { maxHeight: height }),
          y,
        }}
        initial={reduceMotion ? false : { y: windowHeight }}
        animate={{
          y: initialY,
          transition: initialY > 0 ? { type: "tween", duration: 0 } : animationOptions,
        }}
        exit={{ y: windowHeight, transition: animationOptions }}
        onAnimationComplete={handleAnimationComplete}
      >
        {children}
      </motion.div>
    );
  },
);

export default SheetContainer;
