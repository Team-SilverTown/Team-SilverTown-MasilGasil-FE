"use client";

import { useState } from "react";

const useSignInModel = () => {
  const [focusedStep, setFocusedStep] = useState(0);

  return { focusedStep, setFocusedStep };
};

export default useSignInModel;
