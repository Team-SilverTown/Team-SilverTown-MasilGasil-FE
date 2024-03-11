import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";
import * as S from "./Post.styles";
import { TAB_CONTENTS } from "./Post.constants";
import { MateDummyType, PostTabType, UserDummyType } from "./Post.types";
import { GeoPosition } from "@/types/OriginDataType";
import Theme, { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import { Button, Tab } from "@/components";
import PostMapSection from "./components/PostMapSection/PostMapSection";
import PostPin from "./components/PostPin/PostPin";
import PostMemo from "./components/PostMemo/PostMemo";
import PostMate from "./components/PostMate/PostMate";
import PostKebabMenu from "./components/PostKebabMenu/PostKebabMenu";
import Link from "next/link";
import { PostDetailResponse } from "@/types/Response/Post";

interface PostViewProps {
  postId: string;
  postData: PostDetailResponse;
  userInfo: UserDummyType;
  tabIndex: PostTabType;
  currentPinIndex: number;
  mapCenter: GeoPosition;
  handlePinIndex: (index: number) => void;
  handleClickCenter: () => void;
  handleClickTab: (index: number) => void;
  mateData: MateDummyType[];
}

const PostView = ({
  postId,
  postData,
  userInfo,
  tabIndex,
  currentPinIndex,
  mapCenter,
  handlePinIndex,
  handleClickCenter,
  handleClickTab,
  mateData,
}: PostViewProps) => {
  const { lat: firstLat, lng: firstLng } = postData.path[0];

  return (
    <>
      <TopNavigator
        leftChildren={<GoBackButton />}
        rightChildren={<PostKebabMenu />}
      />
      <S.PostContainer>
        <PostMapSection
          postData={postData}
          currentPinIndex={currentPinIndex}
          mapCenter={mapCenter}
          handlePinIndex={handlePinIndex}
          handleClickCenter={handleClickCenter}
        />
        <S.PostContentLayout>
          <Tab
            style={{
              fontSize: `${FONT_SIZE.H6}`,
              fontWeight: `${FONT_WEIGHT.BOLD}`,
            }}
            tabContents={TAB_CONTENTS}
            tabClickHandler={handleClickTab}
            focusedTab={tabIndex}
          />

          <S.PostContentSection className="scrollbar-hide">
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
                handlePinIndex={handlePinIndex}
              />
            )}
            {tabIndex === PostTabType.Mate && <PostMate mateData={mateData} />}
          </S.PostContentSection>
          {(tabIndex === PostTabType.Memo || tabIndex === PostTabType.Pin) && (
            <Link href={`/log/record?postId=${postId}`}>
              <Button
                width="calc(100% - 3rem)"
                textColor={Theme.lightTheme.white}
                buttonColor={Theme.lightTheme.green_500}
                style={{
                  position: "absolute",
                  left: "50%",
                  bottom: "7rem",
                  transform: "translateX(-50%)",
                  fontSize: `${FONT_SIZE.LARGE}`,
                  fontWeight: `${FONT_WEIGHT.BOLD}`,
                }}
              >
                산책하기
              </Button>
            </Link>
          )}
          {tabIndex === PostTabType.Mate && (
            <Link href={`/mate/create?lat=${firstLat}&lng=${firstLng}`}>
              <Button
                width="calc(100% - 3rem)"
                textColor={Theme.lightTheme.white}
                buttonColor={Theme.lightTheme.green_500}
                style={{
                  position: "absolute",
                  left: "50%",
                  bottom: "7rem",
                  transform: "translateX(-50%)",
                  fontSize: `${FONT_SIZE.LARGE}`,
                  fontWeight: `${FONT_WEIGHT.BOLD}`,
                }}
              >
                메이트 모집하기
              </Button>
            </Link>
          )}
        </S.PostContentLayout>
      </S.PostContainer>
    </>
  );
};

export default PostView;
