"use client";

import { useEffect, useMemo, useState } from "react";

import { calculatePathCenter } from "@/lib/utils";

import { GeoPosition } from "@/types/OriginDataType";
import { PostTabType } from "./Post.types";
import useMeStore from "@/stores/useMeStore";
import { MATE_DUMMY_DATA } from "./Post.constants";
import { PostDetailResponse } from "@/types/Response/Post";

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
    mateData: MATE_DUMMY_DATA.contents,
  };
};

export default usePostModel;
