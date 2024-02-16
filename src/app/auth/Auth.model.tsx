"use client";

import { useState } from "react";

const useAuthModel = () => {
  const [focusedStep, setFocusedStep] = useState(0);

  return { focusedStep, setFocusedStep };
};

export default useAuthModel;
