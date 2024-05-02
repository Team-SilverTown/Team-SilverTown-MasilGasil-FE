import { TopNavigator } from "@/components/navigators/TopNavigator";
import { ProfileResponse } from "@/types/Response";
import { PostMoreListResponse } from "@/types/Response/Post";

import { MyInfo, WalkList, WalkStartButton } from "./components";

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
            className="ml-6 font-maplestory font-bold text-green-500"
            style={{ fontSize: "2.2rem" }}
          >
            마실가실
          </h1>
        }
      />
      <div className="box-border w-full select-none pb-80 pt-24">
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
