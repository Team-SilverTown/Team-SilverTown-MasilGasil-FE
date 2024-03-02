"use client";

import { useEffect, useState } from "react";
import useUserLocationStore from "@/stores/useUserLocationStore";
import useGetCurrentPosition from "./hook/useGetCurrentPosition";
import useGetWeatherForecast from "./hook/useGetweatherForecast";
import useGetAirQuality from "./hook/useGetAirQuality";
import convertLatLonToTM from "./utils/convertLatLonToTM";

const useHomeModel = () => {
  const [isNotification] = useState<null | boolean>(null);

  const { setUserLocation } = useUserLocationStore();
  const { location } = useGetCurrentPosition();
  const { getWeatherForecast, temperature, weather, precipitation } = useGetWeatherForecast();
  const { pm10, address, getNearbyStation } = useGetAirQuality();

  useEffect(() => {
    if (location.lat > 0 && location.lng > 0) {
      const coords = convertLatLonToTM(location.lat, location.lng); // 위도와 경도를 TM 좌표계로 변환

      const tmX = coords.x;
      const tmY = coords.y;

      if (tmX && tmY && tmX > 0 && tmY > 0) {
        getNearbyStation(tmX, tmY);
        getWeatherForecast(location);
        setUserLocation(location);
      }
    }
  }, [location]);

  return {
    isNotification,
    temperature,
    weather,
    precipitation,
    pm10,
    address,
  };
};

export default useHomeModel;
