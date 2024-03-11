import Link from "next/link";

import { More } from "@/components/icons";
import { WalkList, MyWalkRecord, MyLocationWeather } from "./components";

import * as S from "./Home.styles";
import WalkStartButton from "./components/WalkStartButton/WalkStartButton";
import { MeResponse } from "@/types/Response";
import { WalkListProps } from "./Home.types";

interface HomeViewProps {
  userInfo: MeResponse;
  walkData: WalkListProps[];
}

const HomeView = ({ userInfo, walkData }: HomeViewProps) => {
  return (
    <div className={S.HomePageContainer}>
      <section className={S.MyInfoSection}>
        <MyLocationWeather />
        <MyWalkRecord userInfo={userInfo} />
      </section>
      <section className={S.WalkListSection}>
        {walkData.map(({ title, walkList, urlLink }) => (
          <section
            className={S.HomeWalkListSection}
            key={title}
          >
            <article className={S.HomeWalkListArticle}>
              <h3 className={S.HomeWalkListTitle}>{title}</h3>
              <Link href={urlLink}>
                <More />
              </Link>
            </article>
            <WalkList
              userInfo={userInfo}
              walkList={walkList}
            />
          </section>
        ))}
      </section>
      <WalkStartButton />
    </div>
  );
};

export default HomeView;
