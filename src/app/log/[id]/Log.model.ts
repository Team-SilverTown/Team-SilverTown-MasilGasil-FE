"use client";

import { useEffect, useMemo, useState } from "react";

import useMeStore from "@/stores/useMeStore";

import calculatePathCenter from "@/lib/utils/calculatePathCenter";

import { GeoPosition } from "@/types/OriginDataType";
import { TabType } from "./Log.types";
import { MasilDetailResponse } from "@/types/Response";

interface useLogModelProps {
  masilData: MasilDetailResponse;
}

const useLogModel = ({ masilData }: useLogModelProps) => {
  const [tabIndex, setTabIndex] = useState(TabType.Memo);
  const [currentPinIndex, setCurrentPinIndex] = useState(-1);
  const [mapCenter, setMapCenter] = useState<GeoPosition>({ lat: 0, lng: 0 });

  const { sex, birthDate, height, weight, exerciseIntensity } = useMeStore();
  const userInfo = { sex, birthDate, height, weight, exerciseIntensity };

  const baseLocation = useMemo(() => {
    if (masilData) {
      return calculatePathCenter(masilData.path);
    }

    return { lat: 0, lng: 0 };
  }, [masilData]);

  useEffect(() => {
    setMapCenter(baseLocation);
  }, [baseLocation]);

  return {
    tabIndex,
    setTabIndex,
    currentPinIndex,
    setCurrentPinIndex,
    mapCenter,
    setMapCenter,
    baseLocation,
    userInfo,
  };
};

export default useLogModel;
