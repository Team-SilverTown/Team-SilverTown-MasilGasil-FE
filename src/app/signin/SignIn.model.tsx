"use client";

import { useState } from "react";

const useSignInModel = () => {
  const [focusedStep, setFocusedStep] = useState(0);
  const [checkAllPolicy, setCheckAllPolicy] = useState(false);
  const [policyCheck, setPolicyCheck] = useState<Array<boolean>>([]);

  return {
    focusedStep,
    setFocusedStep,
    checkAllPolicy,
    setCheckAllPolicy,
    policyCheck,
    setPolicyCheck,
  };
};

export default useSignInModel;
