"use client";

import { useState } from "react";

const useMainModel = () => {
  const [loading, setLoading] = useState(true);

  return { loading, setLoading };
};

export default useMainModel;
