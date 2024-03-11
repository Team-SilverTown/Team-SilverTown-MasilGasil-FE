import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";
import * as S from "./Post.styles";
import { PostsDataType, TAB_CONTENTS } from "./Post.constants";
import { MeResponse } from "@/types/Response";
import { PostTabType } from "./Post.types";
import { GeoPosition } from "@/types/OriginDataType";
import Theme, { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import { Button, Tab } from "@/components";
import PostMapSection from "./components/PostMapSection/PostMapSection";
import PostPin from "./components/PostPin/PostPin";
import PostMemo from "./components/PostMemo/PostMemo";
import PostMate from "./components/PostMate/PostMate";
import PostKebabMenu from "./components/PostKebabMenu/PostKebabMenu";
import Link from "next/link";
import useMeStore from "@/stores/useMeStore";

interface PostViewProps {
  postId: number;
  postsData: PostsDataType;
  userInfo: MeResponse;
  tabIndex: PostTabType;
  currentPinIndex: number;
  mapCenter: GeoPosition;
  setTabIndex: React.Dispatch<React.SetStateAction<PostTabType>>;
  handlePinIndex: (index: number) => void;
  handleClickCenter: () => void;
}

const PostView = ({
  postId,
  postsData,
  userInfo,
  tabIndex,
  currentPinIndex,
  mapCenter,
  setTabIndex,
  handlePinIndex,
  handleClickCenter,
}: PostViewProps) => {
  const { userId, nickname, profileImg, sex, birthDate, height, weight, exerciseIntensity } =
    useMeStore();

  console.log(userId);
  return (
    <>
      <TopNavigator
        leftChildren={<GoBackButton />}
        rightChildren={<PostKebabMenu />}
      />
      <S.PostContainer>
        <PostMapSection
          postsData={postsData}
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
            tabClickHandler={(index) => {
              setTabIndex(index);
            }}
            focusedTab={tabIndex}
          />

          <S.PostContentSection className="scrollbar-hide">
            {tabIndex === PostTabType.Memo && (
              <PostMemo
                distance={1100}
                totalTime={3600}
                userInfo={userInfo}
                address={`${postsData.depth1} ${postsData.depth2}`}
              />
            )}
            {tabIndex === PostTabType.Pin && (
              <PostPin
                pins={postsData.pins}
                currentPinIndex={currentPinIndex}
                handlePinIndex={handlePinIndex}
              />
            )}
            {tabIndex === PostTabType.Mate && <PostMate />}
          </S.PostContentSection>
          {(tabIndex === PostTabType.Memo || tabIndex === PostTabType.Pin) && (
            <Link href="/post/:id">
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
            <Link href="/mate/create?lat=lat&lng=lng">
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
