"use client";

import { useState } from "react";

const useMateCreateModel = () => {
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [selectedPersonnel, setSelectedPersonnel] = useState("");

  return {
    isFormFilled,
    setIsFormFilled,
    selectedPersonnel,
    setSelectedPersonnel,
  };
};

export default useMateCreateModel;
