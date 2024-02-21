"use client";

import { useState } from "react";

const useSignInModel = () => {
  const [selectedSex, setSelectedSex] = useState<"male" | "female" | null>(null);

  const [focusedStep, setFocusedStep] = useState(0);
  const [checkAllPolicy, setCheckAllPolicy] = useState(false);
  const [policyCheck, setPolicyCheck] = useState<Array<boolean>>([]);

  return {
    selectedSex,
    setSelectedSex,
    focusedStep,
    setFocusedStep,
    checkAllPolicy,
    setCheckAllPolicy,
    policyCheck,
    setPolicyCheck,
  };
};

export default useSignInModel;
