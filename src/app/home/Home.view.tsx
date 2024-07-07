import LogoM from "@/components/icons/LogoM";
import { ProfileResponse } from "@/types/Response";
import { PostMoreListResponse } from "@/types/Response/Post";

import { MyInfo, MyLocationWeather, WalkList, WalkStartButton } from "./components";
import StatisticContainer from "./components/StatisticContainer/StatisticContainer";
import StatusContainer from "./components/StatusContainer";

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
      <header className="sticky top-7 mb-2 mt-7 flex w-full flex-col items-center justify-start bg-background">
        <LogoM />
      </header>
      <section className="sticky top-0 z-10 flex flex-col gap-5 p-7">
        <StatusContainer />
        <StatisticContainer userData={userInfo} />
      </section>
      <section className="box-border h-[1400px] w-full select-none pb-80">
        <WalkList
          MyLikeWalkingTrailsList={MyLikeWalkingTrailsList}
          PopularWalkingTrailsList={PopularWalkingTrailsList}
        />
        <WalkStartButton />
      </section>
    </>
  );
};

export default HomeView;
