"use client";

import { useState } from "react";
import { GeoPosition } from "@/types/OriginDataType";

interface useLogModelProps {
  baseLocation: GeoPosition;
}

const useLogModel = ({ baseLocation }: useLogModelProps) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [currentPinIndex, setCurrentPinIndex] = useState(0);
  const [mapCenter, setMapCenter] = useState<GeoPosition>(baseLocation);

  return {
    tabIndex,
    setTabIndex,
    currentPinIndex,
    setCurrentPinIndex,
    mapCenter,
    setMapCenter,
  };
};

export default useLogModel;
