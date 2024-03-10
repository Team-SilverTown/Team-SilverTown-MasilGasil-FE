import Link from "next/link";

import { WALKLIST_DUMMY_DATA } from "./Home.constants";

import { More } from "@/components/icons";
import { WalkList, MyWalkRecord, MyLocationWeather } from "./components";

import * as S from "./Home.styles";
import WalkStartButton from "./components/WalkStartButton/WalkStartButton";

const HomeView = () => {
  return (
    <div className={S.HomePageContainer}>
      <section className={S.MyInfoSection}>
        <MyLocationWeather />
        <MyWalkRecord />
      </section>
      <section className={S.WalkListSection}>
        {WALKLIST_DUMMY_DATA.map(({ title, walkList, urlLink }) => (
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
            <WalkList walkList={walkList} />
          </section>
        ))}
      </section>
      <WalkStartButton />
    </div>
  );
};

export default HomeView;
