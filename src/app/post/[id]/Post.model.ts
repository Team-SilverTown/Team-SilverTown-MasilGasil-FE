"use client";

import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import calculatePathCenter from "@/lib/utils/calculatePathCenter";

import { getPostDetail } from "@/lib/api/Post/client";
import { GET_KEY } from "@/lib/api/queryKeys";

import { GeoPosition } from "@/types/OriginDataType";
import { PostTabType } from "./Post.types";
import useMeStore from "@/stores/useMeStore";
import { MATE_DUMMY_DATA } from "./Post.constants";

interface usePostModelProp {
  postId: string;
}

const usePostModel = ({ postId }: usePostModelProp) => {
  const [tabIndex, setTabIndex] = useState(PostTabType.Memo);
  const [currentPinIndex, setCurrentPinIndex] = useState(-1);
  const [mapCenter, setMapCenter] = useState<GeoPosition>({
    lat: 0,
    lng: 0,
  });
  const { data: postData } = useQuery({
    queryKey: [GET_KEY.GET_LOG],
    queryFn: () => getPostDetail({ id: postId }),
  });

  const { sex, birthDate, weight, height, exerciseIntensity } = useMeStore();
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
    postData,
    baseLocation,
    userInfo,
    mateData: MATE_DUMMY_DATA,
  };
};

export default usePostModel;
