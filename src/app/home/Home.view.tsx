import { PostMoreListResponse } from "@/types/Response/Post";
import { ProfileResponse } from "@/types/Response";

import { TopNavigator } from "@/components/navigators/TopNavigator";
import { WalkList, MyWalkRecord, MyLocationWeather, WalkStartButton } from "./components";
import Notification from "./components/Notification";

import * as S from "./Home.styles";

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
      <TopNavigator rightChildren={<Notification isNotification={true} />} />
      <div className={S.HomePageContainer}>
        <section className={S.MyInfoSection}>
          <MyLocationWeather />
          <MyWalkRecord userInfo={userInfo} />
        </section>
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
