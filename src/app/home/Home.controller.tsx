"use client";

import { useEffect } from "react";
import useUserLocationStore from "@/stores/useUserLocationStore";
import { useGetAirQuality, useGetWeatherForecast } from "./hook";
import convertLatLonToTM from "./utils/convertLatLonToTM";
import useHomeModel from "./Home.model";
import HomeView from "./Home.view";
import { TopNavigator } from "@/components/navigators/TopNavigator";
import Notification from "./components/Notification/Notification";

const HomeController = () => {
  const { isNotification } = useHomeModel();

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

  return (
    <>
      <TopNavigator rightChildren={<Notification isNotification={isNotification} />} />
      <HomeView
        temperature={temperature}
        weather={weather}
        precipitation={precipitation}
        address={address}
        pm10={pm10}
      />
    </>
  );
};

export default HomeController;
