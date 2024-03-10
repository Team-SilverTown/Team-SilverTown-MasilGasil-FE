"use client";

import { useState } from "react";

const useExploreModel = () => {
  const [locationData, setLocationData] = useState<{
    depth1: string;
    depth2: string;
    depth3: string;
    depth4: string;
  } | null>(null);

  return {
    locationData,
    setLocationData,
  };
};

export default useExploreModel;
