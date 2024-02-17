import React, { CSSProperties, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface StepLayoutProps {
  focusedStep: number;
  prevFocusedStep: number;
  distance?: number;
  duration?: number;
  stepViews: ReactNode[];
  style?: CSSProperties;
}

const StepLayout = ({
  focusedStep,
  prevFocusedStep,
  stepViews,
  distance = 20,
  duration = 0.4,
  style,
}: StepLayoutProps) => {
  return (
    <AnimatePresence
      mode="popLayout"
      initial={false}
    >
      <motion.div
        key={focusedStep ? focusedStep : -1}
        initial={{
          x: prevFocusedStep < focusedStep ? distance : -distance,
          opacity: 0,
        }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration }}
        style={{ ...style }}
      >
        {focusedStep !== -1 ? stepViews[focusedStep] : null}
      </motion.div>
    </AnimatePresence>
  );
};

export default StepLayout;
