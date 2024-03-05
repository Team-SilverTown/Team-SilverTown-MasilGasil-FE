"use client";

import { useEffect } from "react";
import { FineDust, Location } from "@/components/icons";
import * as S from "./MyLocationWeather.styles";
import convertLatLonToTM from "../../utils/convertLatLonToTM";
import useUserLocationStore from "@/stores/useUserLocationStore";
import { useGetAirQuality, useGetWeatherForecast } from "../../hook";
import { ClearSky, Overcast, PartlyCloudy, Rainy, Sleet, Snowy } from "@/components/icons";

const WEATHER_ICON = {
  맑음: <ClearSky />,
  구름조금: <PartlyCloudy />,
  흐림: <Overcast />,
  비: <Rainy />,
  진눈개비: <Sleet />,
  눈: <Snowy />,
  없음: null,
};

const findDust = (pm10: number | null) => {
  if (!pm10) {
    return;
  }

  if (pm10 >= 0 && pm10 <= 30) {
    return "좋음";
  } else if (pm10 >= 31 && pm10 <= 80) {
    return "보통";
  } else if (pm10 >= 81 && pm10 <= 150) {
    return "나쁨";
  } else if (pm10 > 150) {
    return "매우 나쁨";
  }
};

const MyLocationWeather = () => {
  const { setUserLocation } = useUserLocationStore();
  const { getWeatherForecast, temperature, weather, precipitation } = useGetWeatherForecast();
  const { pm10, address, getNearbyStation } = useGetAirQuality();

  const showYourLocation = ({ coords }: GeolocationPosition) => {
    const lat = coords.latitude;
    const lng = coords.longitude;
    setUserLocation({
      lat,
      lng,
    });

    if (lat <= 0 || lng <= 0) {
      return;
    }

    const tmCoords = convertLatLonToTM(lat, lng); // 위도와 경도를 TM 좌표계로 변환

    const tmX = tmCoords.x;
    const tmY = tmCoords.y;

    if (tmX && tmY && tmX > 0 && tmY > 0) {
      getNearbyStation(tmX, tmY);
      getWeatherForecast({ lat, lng });
    }
  };

  const showErrorMsg = (error: GeolocationPositionError) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        throw new Error("이 문장은 사용자가 Geolocation API의 사용 요청을 거부했을 때 나타납니다!");

      case error.POSITION_UNAVAILABLE:
        throw new Error("이 문장은 가져온 위치 정보를 사용할 수 없을 때 나타납니다!");

      case error.TIMEOUT:
        throw new Error(
          "이 문장은 위치 정보를 가져오기 위한 요청이 허용 시간을 초과했을 때 나타납니다!",
        );

      default:
        throw new Error("이 문장은 알 수 없는 오류가 발생했을 때 나타납니다!");
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(showYourLocation, showErrorMsg);
  }, []);

  const weatherIcon =
    precipitation && weather ? WEATHER_ICON[precipitation] || WEATHER_ICON[weather] : null;
  const pm10Value = findDust(pm10);

  return (
    <S.MyLocationWeatherLayout>
      <S.MyLocation>
        {address && (
          <>
            <Location />
            <span>{address}</span>
          </>
        )}
      </S.MyLocation>
      <S.MyWeather>
        <li className="temperatures">
          {weather && (
            <>
              {weatherIcon} {weather}
            </>
          )}
          {temperature && `${temperature}˚`}
        </li>
        <li className="fineDust">
          {pm10 && (
            <>
              <FineDust />
              미세먼지 {pm10Value}
            </>
          )}
        </li>
      </S.MyWeather>
    </S.MyLocationWeatherLayout>
  );
};

export default MyLocationWeather;
