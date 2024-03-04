"use client";

import { useState } from "react";

const useMateCreateModel = () => {
  const [isFormFilled, setIsFormFilled] = useState(false);

  return {
    isFormFilled,
    setIsFormFilled,
  };
};

export default useMateCreateModel;
