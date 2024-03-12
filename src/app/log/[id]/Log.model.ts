"use client";

import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import useMeStore from "@/stores/useMeStore";

import { getMasilDetail } from "@/lib/api/masil/client";
import { GET_KEY } from "@/lib/api/queryKeys";
import calculatePathCenter from "@/lib/utils/calculatePathCenter";

import { GeoPosition } from "@/types/OriginDataType";
import { TabType } from "./Log.types";

interface useLogModelProps {
  logId: string;
}

const useLogModel = ({ logId }: useLogModelProps) => {
  const [tabIndex, setTabIndex] = useState(TabType.Memo);
  const [currentPinIndex, setCurrentPinIndex] = useState(0);
  const [mapCenter, setMapCenter] = useState<GeoPosition>({ lat: 0, lng: 0 });

  const { data: masilData } = useQuery({
    queryKey: [GET_KEY.GET_LOG],
    queryFn: () => getMasilDetail({ id: logId }),
  });

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
    masilData,
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
