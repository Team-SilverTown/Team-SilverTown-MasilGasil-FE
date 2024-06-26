"use client";

import { useEffect, useMemo, useState } from "react";

import useMeStore from "@/lib/stores/useMeStore";
import calculatePathCenter from "@/lib/utils/calculatePathCenter";
import { GeoPosition } from "@/types/OriginDataType";
import { PostDetailResponse } from "@/types/Response/Post";

import { PostTabType } from "./Post.types";

interface usePostModelProp {
  postData: PostDetailResponse;
}

const usePostModel = ({ postData }: usePostModelProp) => {
  const [tabIndex, setTabIndex] = useState(PostTabType.Memo);
  const [currentPinIndex, setCurrentPinIndex] = useState(-1);
  const [mapCenter, setMapCenter] = useState<GeoPosition>({
    lat: 0,
    lng: 0,
  });

  const { sex, birthDate, weight, height, exerciseIntensity, userId } = useMeStore();
  const userInfo = { sex, birthDate, weight, height, exerciseIntensity };

  const baseLocation = useMemo(() => {
    if (postData) {
      return calculatePathCenter(postData.path);
    }
    return { lat: 0, lng: 0 };
  }, [postData]);

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
    userId,
  };
};

export default usePostModel;
