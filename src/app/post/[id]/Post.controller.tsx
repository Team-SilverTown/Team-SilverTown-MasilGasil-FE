"use client";

import usePostModel from "./Post.model";
import PostView from "./Post.view";
import { PostTabType } from "./Post.types";
import useMasilMapStore from "@/components/MasilMap/store/useMasilMapStore";
import { PostDetailResponse } from "@/types/Response/Post";

interface PostControllerProps {
  postId: string;
  postData: PostDetailResponse;
}

const PostController = ({ postId, postData }: PostControllerProps) => {
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
    mateData,
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

    const { lat, lng } = postData.pins[PinIndex].point;
    setMapCenter({ lat, lng });
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
      const { lat, lng } = postData.pins[0].point;
      setCurrentPinIndex(0);
      setMapCenter({ lat, lng });
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
