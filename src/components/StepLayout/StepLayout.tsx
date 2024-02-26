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

/**
 * @param focusedStep 현재 포커스된 스탭을 나타냅니다. 이를 통해 해당 index 의 요소를 보여줍니다.
 * @param prevFocusedStep 직전에 포커스된 스탭을 나타냅니다. 이를 통해 x 축 이동 애니메이션을 제어합니다.
 * @param stepViews StepLayout 에 보여지는 View 리스트 입니다.
 * @param distance x 축이 이동하는 정도 (px) 을 나타냅니다. (default 20)
 * @param duration 이동 애니메이션의 진행 시간을 s 단위로 나타냅니다. (default 0.4)
 * @param style Layout 에 대한 커스텀 스타일 인자입니다.
 */
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
      mode="popLayout" // Layout 의 애니메이션이 상위 요소에 영향을 주지 않도록 합니다.
      initial={false} // 초기 view 를 보알 때 애니메이션을 진행하지 않습니다.
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
