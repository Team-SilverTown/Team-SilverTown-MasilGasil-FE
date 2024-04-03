"use client";

import styles from "./styles";

import * as React from "react";

import { useSheetContext, useSheetScrollerContext } from "./context";
import { useDragConstraints } from "./hooks";
import { SheetDraggableProps } from "./types";
import { mergeRefs } from "./utils";

import { motion } from "framer-motion";

const SheetContent = React.forwardRef<any, SheetDraggableProps>(
  ({ children, style, disableDrag, className = "", ...rest }, ref) => {
    const sheetContext = useSheetContext();
    const sheetScrollerContext = useSheetScrollerContext();
    const { constraintsRef, onMeasureDragConstraints } = useDragConstraints();

    const dragProps =
      disableDrag || sheetScrollerContext.disableDrag ? undefined : sheetContext.dragProps;

    return (
      <motion.div
        {...rest}
        ref={mergeRefs([ref, constraintsRef])}
        className={`react-modal-sheet-content ${className}`}
        style={{ ...styles.content, ...style }}
        {...dragProps}
        dragConstraints={constraintsRef}
        onMeasureDragConstraints={onMeasureDragConstraints}
      >
        {children}
      </motion.div>
    );
  },
);

export default SheetContent;
