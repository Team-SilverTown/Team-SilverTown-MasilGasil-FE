"use client";

import { useEffect, useState } from "react";
import convertLatLonToGrid from "./components/MyLocationWeather/utils/convertLatLonToGrid";
import getCurrentDateTime from "./components/MyLocationWeather/utils/getCurrentDateTime";

interface LocationType {
  lat: number;
  lon: number;
}

const useHomeModel = () => {
  const [isNotification] = useState<null | boolean>(null);
  const [location, setLocation] = useState<LocationType>({
    lat: 0,
    lon: 0,
  });
  const [temperature, settemperature] = useState<null | number>(null);
  const [weather, setWeather] = useState<null | string>(null);
  const [precipitation, setPrecipitation] = useState<null | string>(null);

  function success({ coords }: GeolocationPosition) {
    const lat = coords.latitude;
    const lon = coords.longitude;
    setLocation({
      lat,
      lon,
    });
  }

  function error() {
    alert("위치 정보를 불러올 수 없습니다.");
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  const getWeatherForecast = async ({ lat, lon }: LocationType) => {
    const currentDateTime = getCurrentDateTime();

    const grid = convertLatLonToGrid("toXY", lat, lon);
    const url = new URL(
      "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst",
    );
    const SERVICE_KEY = process.env.WEATHER_SERVICE_KEY;

    if (!SERVICE_KEY) {
      throw new Error("서비스 키가 존재하지 않습니다.");
      return;
    }

    const params = {
      serviceKey: SERVICE_KEY,
      pageNo: "1",
      numOfRows: "60",
      dataType: "json",
      base_date: currentDateTime.date,
      base_time: currentDateTime.time,
      nx: (grid.x || 0).toString(),
      ny: (grid.y || 0).toString(),
    };

    url.search = new URLSearchParams(params).toString();

    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    const weatherData = result.response?.body?.items?.item;

    if (!weatherData) {
      return;
    }

    const temperature = weatherData.find((item: any) => item.category === "T1H").fcstValue;
    const skyStatus = weatherData.find((item: any) => item.category === "SKY").fcstValue;
    const precipitation = weatherData.find((item: any) => item.category === "PTY").fcstValue;

    if (temperature) {
      settemperature(temperature);
    }

    if (skyStatus) {
      switch (skyStatus) {
        case "1":
          setWeather("맑음");
          break;
        case "2":
          setWeather("구름조금");
          break;
        case "3":
          setWeather("구름많음");
          break;
        case "4":
          setWeather("흐림");
          break;
        default:
          setWeather("없음");
      }
    }

    if (precipitation) {
      switch (precipitation) {
        case "0":
          setPrecipitation("없음");
          break;
        case "1":
          setPrecipitation("비");
          break;
        case "2":
          setPrecipitation("진눈개비");
          break;
        case "3":
          setPrecipitation("눈");
          break;
        default:
          setPrecipitation("없음");
      }
    }
  };

  useEffect(() => {
    getWeatherForecast(location);
  }, [location]);

  return {
    isNotification,
    temperature,
    weather,
    precipitation,
  };
};

export default useHomeModel;
