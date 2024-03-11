"use client";

import { GeoPosition } from "@/types/OriginDataType";
import { PostTabType } from "./Post.types";
import { useState } from "react";

interface usePostModelProps {
  baseLocation: GeoPosition;
}

const usePostModel = ({ baseLocation }: usePostModelProps) => {
  const [tabIndex, setTabIndex] = useState(PostTabType.Memo);
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

export default usePostModel;
