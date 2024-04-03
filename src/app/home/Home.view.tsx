import * as S from "./Home.styles";

import { TopNavigator } from "@/components/navigators/TopNavigator";
import { ProfileResponse } from "@/types/Response";
import { PostMoreListResponse } from "@/types/Response/Post";

import { WalkList, WalkStartButton } from "./components";
import MyInfo from "./components/MyInfo/MyInfo";

interface HomeViewProps {
  MyLikeWalkingTrailsList: PostMoreListResponse;
  PopularWalkingTrailsList: PostMoreListResponse;
  userInfo: ProfileResponse;
}

const HomeView = ({
  MyLikeWalkingTrailsList,
  PopularWalkingTrailsList,
  userInfo,
}: HomeViewProps) => {
  return (
    <>
      <TopNavigator
        leftChildren={
          <h1
            className={S.HomeLogo}
            style={{ fontSize: "2.2rem" }}
          >
            마실가실
          </h1>
        }
      />
      <div className={S.HomePageContainer}>
        <MyInfo userInfo={userInfo} />
        <WalkList
          MyLikeWalkingTrailsList={MyLikeWalkingTrailsList}
          PopularWalkingTrailsList={PopularWalkingTrailsList}
        />
        <WalkStartButton />
      </div>
    </>
  );
};

export default HomeView;
