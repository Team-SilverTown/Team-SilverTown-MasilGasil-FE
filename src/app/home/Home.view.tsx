"use client";

import Link from "next/link";
import * as GS from "@/styles/GlobalStyle";
import * as S from "./Home.styles";
import { WALKLIST_DUMMY_DATA } from "./Home.constants";
import WalkList from "./components/WalkList/WalkList";
import MyWalkRecord from "./components/MyWalkRecord/MyWalkRecord";
import MyLocationWeather from "./components/MyLocationWeather/MyLocationWeather";
import { Precipitation, WeatherType } from "./Home.types";
import { More, ClearSky, Overcast, PartlyCloudy, Rainy, Sleet, Snowy } from "@/components/icons";

interface HomeViewProps {
  temperature: string | null;
  weather: WeatherType | null;
  precipitation: Precipitation | null;
  address: string;
  pm10: number | null;
}

const WEATHER_ICON = {
  맑음: <ClearSky />,
  구름조금: <PartlyCloudy />,
  흐림: <Overcast />,
  비: <Rainy />,
  진눈개비: <Sleet />,
  눈: <Snowy />,
  없음: null,
};

const HomeView = ({ temperature, weather, precipitation, address, pm10 }: HomeViewProps) => {
  const weatherIcon =
    precipitation && weather ? WEATHER_ICON[precipitation] || WEATHER_ICON[weather] : null;

  return (
    <GS.CommonContainer>
      <MyLocationWeather
        temperature={temperature}
        weather={weatherIcon}
        precipitation={precipitation}
        address={address}
        pm10={pm10}
      />
      <MyWalkRecord weather={weatherIcon} />
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
