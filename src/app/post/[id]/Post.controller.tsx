"use client";

import usePostModel from "./Post.model";
import PostView from "./Post.view";
import { PostTabType } from "./Post.types";
import useMasilMapStore from "@/components/MasilMap/store/useMasilMapStore";
import { PostDetailResponse } from "@/types/Response/Post";
import { MateDetailResponse } from "@/types/Response";

interface PostControllerProps {
  postId: string;
  postData: PostDetailResponse;
  mateData: MateDetailResponse;
}

const PostController = ({ postId, postData, mateData }: PostControllerProps) => {
  const {
    tabIndex,
    setTabIndex,
    currentPinIndex,
    setCurrentPinIndex,
    mapCenter,
    setMapCenter,
    baseLocation,
    userInfo,
    userId,
  } = usePostModel({ postData });
  const { setIsOutCenter } = useMasilMapStore();

  if (!postData) {
    return;
  }

  const handleCurrentPinIndex = (PinIndex: number) => {
    setCurrentPinIndex(PinIndex);
    setTabIndex(PostTabType.Pin);

    if (postData.pins.length === 0) {
      return;
    }

    const { point } = postData.pins[PinIndex];
    setMapCenter(point);
    setIsOutCenter(false);
  };

  const handleClickCenter = () => {
    setCurrentPinIndex(-1);
    setTabIndex(PostTabType.Memo);
    setMapCenter(baseLocation);
    setIsOutCenter(false);
  };

  const handleClickTab = (index: number) => {
    if (PostTabType.Pin === index) {
      if (postData.pins.length === 0) {
        setTabIndex(index);
        return;
      }

      const { point } = postData.pins[0];
      setCurrentPinIndex(0);
      setMapCenter(point);
      setIsOutCenter(false);
    }
    setTabIndex(index);
  };

  return (
    <PostView
      postId={postId}
      postData={postData}
      tabIndex={tabIndex}
      currentPinIndex={currentPinIndex}
      mapCenter={mapCenter}
      handleCurrentPinIndex={handleCurrentPinIndex}
      handleClickCenter={handleClickCenter}
      handleClickTab={handleClickTab}
      userId={userId}
      userInfo={userInfo}
      mateData={mateData}
    />
  );
};

export default PostController;
