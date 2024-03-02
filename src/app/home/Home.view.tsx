"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

import { WALKLIST_DUMMY_DATA } from "./Home.constants";

import { Button } from "@/components";
import { More, ClearSky, Overcast, PartlyCloudy, Rainy, Sleet, Snowy } from "@/components/icons";
import { WalkList, MyWalkRecord, MyLocationWeather } from "./components";

import { Precipitation, WeatherType } from "./Home.types";

import Theme, { CONTAINER, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import * as S from "./Home.styles";

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
  const router = useRouter();
  const weatherIcon =
    precipitation && weather ? WEATHER_ICON[precipitation] || WEATHER_ICON[weather] : null;

  const handleClickWalking = () => {
    router.push("/log/record");
  };

  return (
    <S.HomePageContainer>
      <S.MyInfoSection>
        <MyLocationWeather
          temperature={temperature}
          weather={weatherIcon}
          precipitation={precipitation}
          address={address}
          pm10={pm10}
        />
        <MyWalkRecord weather={weatherIcon} />
      </S.MyInfoSection>
      <S.WalkListSection>
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
      </S.WalkListSection>
      <Button
        style={{
          position: "fixed",
          left: "50%",
          bottom: "7rem",
          transform: "translateX(-50%)",
          width: "calc(100% - 3rem)",
          maxWidth: `${CONTAINER.MAX_WIDTH}rem`,
          height: "6rem",
          fontSize: `${FONT_SIZE.H6}`,
          fontWeight: `${FONT_WEIGHT.BOLD}`,
          backgroundColor: `${Theme.lightTheme.green_500}`,
          color: `${Theme.lightTheme.white}`,
        }}
        onClick={handleClickWalking}
      >
        산책 기록 하기
      </Button>
    </S.HomePageContainer>
  );
};

export default HomeView;
