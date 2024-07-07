import LogoM from "@/components/icons/LogoM";
import { ProfileResponse } from "@/types/Response";
import { PostMoreListResponse } from "@/types/Response/Post";

import { MyInfo, WalkList, WalkStartButton } from "./components";
import StatisticContainer from "./components/StatisticContainer/StatisticContainer";

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
      <header className="sticky top-7 my-7 flex w-full flex-col items-center justify-start bg-background">
        <LogoM />
      </header>
      <section className="sticky top-0 z-10 p-7">
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
