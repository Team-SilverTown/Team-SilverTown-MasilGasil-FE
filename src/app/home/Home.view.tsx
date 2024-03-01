"use client";

import * as GS from "@/styles/GlobalStyle";
import { WALKLIST_DUMMY_DATA } from "./Home.constants";
import Link from "next/link";
import * as S from "./Home.styles";
import { More } from "@/components/icons";
import WalkList from "./components/WalkList/WalkList";
import MyWalkRecord from "./components/MyWalkRecord/MyWalkRecord";
import MyLocationWeather from "./components/MyLocationWeather/MyLocationWeather";

interface HomeViewProps {
  temperature: number | null;
  weather: string | null;
  precipitation: string | null;
}

const HomeView = ({ temperature, weather, precipitation }: HomeViewProps) => {
  return (
    <GS.CommonContainer>
      <MyLocationWeather
        temperature={temperature}
        weather={weather}
        precipitation={precipitation}
      />
      <MyWalkRecord />
      {WALKLIST_DUMMY_DATA.map(({ title, walkList, urlLink }) => (
        <S.HomeWalkListSection key={title}>
          <S.HomeWalkListTitle>
            <h3>{title}</h3>
            <Link href={urlLink}>
              <More />
            </Link>
          </S.HomeWalkListTitle>
          <WalkList walkList={walkList} />
        </S.HomeWalkListSection>
      ))}
    </GS.CommonContainer>
  );
};

export default HomeView;
