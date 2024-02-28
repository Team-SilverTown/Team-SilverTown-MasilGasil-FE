"use client";

import { useState } from "react";

const useExploreModel = () => {
  const [location, setLocation] = useState<{
    depth1: string;
    depth2: string;
    depth3: string;
    depth4: string;
  } | null>(null);

  return {
    location,
    setLocation,
  };
};

export default useExploreModel;
