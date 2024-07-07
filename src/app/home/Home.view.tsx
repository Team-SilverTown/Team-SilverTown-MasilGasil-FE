import LogoM from "@/components/icons/LogoM";
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
      <TopNavigator leftChildren={<LogoM />} />
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
