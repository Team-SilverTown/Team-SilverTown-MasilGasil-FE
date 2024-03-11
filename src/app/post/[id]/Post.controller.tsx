"use client";

import { GeoPosition } from "@/types/OriginDataType";
import usePostModel from "./Post.model";
import PostView from "./Post.view";
import { POSTS_DATA, USER_DUMMY_DATA } from "./Post.constants";
import { PostTabType } from "./Post.types";
import useMasilMapStore from "@/components/MasilMap/store/useMasilMapStore";

interface PostControllerProps {
  postId: number;
  baseLocation: GeoPosition;
}

const PostController = ({ postId, baseLocation }: PostControllerProps) => {
  const { tabIndex, setTabIndex, currentPinIndex, setCurrentPinIndex, mapCenter, setMapCenter } =
    usePostModel({ baseLocation });
  const { setIsOutCenter } = useMasilMapStore();

  const handlePinIndex = (PinIndex: number) => {
    setCurrentPinIndex(PinIndex);
    setTabIndex(PostTabType.Pin);

    if (POSTS_DATA.pins.length === 0) {
      return;
    }

    const { lat, lng } = POSTS_DATA.pins[PinIndex].point;
    setMapCenter({ lat, lng });
    setIsOutCenter(false);
  };

  const handleClickCenter = () => {
    setCurrentPinIndex(0);
    setTabIndex(PostTabType.Memo);
    setMapCenter(baseLocation);
    setIsOutCenter(false);
  };

  return (
    <PostView
      postId={postId}
      postsData={POSTS_DATA}
      userInfo={USER_DUMMY_DATA}
      tabIndex={tabIndex}
      currentPinIndex={currentPinIndex}
      mapCenter={mapCenter}
      setTabIndex={setTabIndex}
      handlePinIndex={handlePinIndex}
      handleClickCenter={handleClickCenter}
    />
  );
};

export default PostController;
