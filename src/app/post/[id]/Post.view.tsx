import * as S from "./Post.styles";
import Theme, { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";

import { Button, Tab } from "@/components";
import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";
import { GeoPosition } from "@/types/OriginDataType";
import { MateDetailListResponse, UserInfoType } from "@/types/Response";
import { PostDetailResponse } from "@/types/Response/Post";

import { TAB_CONTENTS } from "./Post.constants";
import { PostTabType } from "./Post.types";
import PostKebabMenu from "./components/PostKebabMenu/PostKebabMenu";
import PostMate from "./components/PostMate/PostMate";
import PostMemo from "./components/PostMemo/PostMemo";
import PostPin from "./components/PostPin/PostPin";
import PostMapSection from "./sections/PostMapSection/PostMapSection";

import Link from "next/link";

interface PostViewProps {
  postId: string;
  postData: PostDetailResponse;
  userInfo: UserInfoType;
  userId: number | undefined;
  tabIndex: PostTabType;
  currentPinIndex: number;
  mapCenter: GeoPosition;
  handleCurrentPinIndex: (index: number) => void;
  handleClickCenter: () => void;
  handleClickTab: (index: number) => void;
  mateData: MateDetailListResponse;
}

const PostView = ({
  postId,
  postData,
  userInfo,
  userId,
  tabIndex,
  currentPinIndex,
  mapCenter,
  handleCurrentPinIndex,
  handleClickCenter,
  handleClickTab,
  mateData,
}: PostViewProps) => {
  const { lat: firstLat, lng: firstLng } = postData.path[0];

  return (
    <>
      <TopNavigator
        leftChildren={<GoBackButton />}
        rightChildren={userId === postData.authorId && <PostKebabMenu />}
        containerStyle={{ backgroundColor: "transparent" }}
      />
      <S.PostContainer>
        <PostMapSection
          postData={postData}
          currentPinIndex={currentPinIndex}
          mapCenter={mapCenter}
          handlePinIndex={handleCurrentPinIndex}
          handleClickCenter={handleClickCenter}
        />
        <S.PostContentLayout>
          <Tab
            className="postTab"
            tabContents={TAB_CONTENTS}
            tabClickHandler={handleClickTab}
            focusedTab={tabIndex}
          />

          <S.PostContentSection
            className="scrollbar-hide"
            style={{
              overflowY: tabIndex === PostTabType.Pin ? "visible" : "auto",
            }}
          >
            {tabIndex === PostTabType.Memo && (
              <PostMemo
                userInfo={userInfo}
                postData={postData}
              />
            )}
            {tabIndex === PostTabType.Pin && (
              <PostPin
                pins={postData.pins}
                currentPinIndex={currentPinIndex}
                handlePinIndex={handleCurrentPinIndex}
              />
            )}
            {tabIndex === PostTabType.Mate && <PostMate mateData={mateData.contents} />}

            <Link
              href={
                tabIndex === PostTabType.Mate
                  ? `/mate/create?postId=${postId}&lat=${firstLat}&lng=${firstLng}`
                  : `/log/record?postId=${postId}`
              }
            >
              <Button
                width="calc(100% - 4rem)"
                textColor={Theme.lightTheme.white}
                buttonColor={Theme.lightTheme.green_500}
                style={{
                  position: "fixed",
                  left: "50%",
                  bottom: "9rem",
                  transform: "translateX(-50%)",
                  fontSize: `${FONT_SIZE.LARGE}`,
                  fontWeight: `${FONT_WEIGHT.BOLD}`,
                }}
              >
                {tabIndex === PostTabType.Mate ? "메이트 모집하기" : "현재 경로로 산책하기"}
              </Button>
            </Link>
          </S.PostContentSection>
        </S.PostContentLayout>
      </S.PostContainer>
    </>
  );
};

export default PostView;
