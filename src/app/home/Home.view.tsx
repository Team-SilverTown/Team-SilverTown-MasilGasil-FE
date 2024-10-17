import LogoM from "@/components/icons/LogoM";
import Earth from "@/components/icons/home/Earth";
import Flag from "@/components/icons/home/Flag";
import Heart from "@/components/icons/home/Heart";
import { ProfileResponse } from "@/types/Response";
import { PostMoreListResponse } from "@/types/Response/Post";

import { LogStartButton } from "./components";
import LogButton from "./components/LogButton/LogButton";
import PostContainer from "./components/PostContainer/PostContainer";
import StatisticContainer from "./components/StatisticContainer/StatisticContainer";
import StatusContainer from "./components/StatusContainer";
import PopularTrailsInOurTown from "./components/WalkList/components/PopularTrailsInOurTown/PopularTrailsInOurTown";

interface HomeViewProps {
  PopularWalkingTrailsList?: PostMoreListResponse;
  userInfo?: ProfileResponse;
}

const HomeView = ({ PopularWalkingTrailsList, userInfo }: HomeViewProps) => {
  return (
    <>
      <header className="top-7 mb-2 mt-7 flex w-full flex-col items-center justify-start bg-background">
        <LogoM />
      </header>

      <article className="sticky top-0 z-10 flex flex-col gap-5 p-7">
        <StatusContainer />
        <StatisticContainer userData={userInfo} />
      </article>

      {userInfo && (
        <article className="box-border flex w-full select-none justify-between gap-7 p-7 pt-0">
          <LogButton
            label={
              <p className="text-[2rem] font-semibold text-gray-700">
                내가 좋아하는 <br /> 산책로
              </p>
            }
            icon={<Heart size={42} />}
            url="/more?keyword=my_like&order=latest"
          />
          <LogButton
            label={
              <p className="text-[2rem] font-semibold text-gray-700">
                최근에 다녀온 <br /> 산책
              </p>
            }
            icon={<Flag size={42} />}
            url="/diary/0"
          />
        </article>
      )}

      <article className="mb-[10rem] box-border flex w-full select-none flex-col justify-between gap-7 p-7 py-0">
        <PostContainer
          label="전국 인기산책로"
          icon={<Earth size={52} />}
          url="/more?keyword=total_popular&order=popular"
          data={PopularWalkingTrailsList}
        />
        <PopularTrailsInOurTown />
      </article>

      <LogStartButton />
    </>
  );
};

export default HomeView;
