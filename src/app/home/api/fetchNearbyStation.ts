"use server";

import { WeatherType, PrecipitationType } from "../Home.types";
import fetchWeatherForecast from "./fetchWeatherForecast";
import fetchAirQuality from "./fetchAirQuality";

interface StationData {
  response: {
    body: {
      items: {
        addr: string;
        stationName: string;
      }[];
    };
  };
}

type PromiseResult<T> = { status: "fulfilled"; value: T } | { status: "rejected"; reason: any };

interface APIResponse {
  pm10: number | null;
  precipitation: PrecipitationType | null;
  temperature: string | null;
  weather: WeatherType | null;
}

interface FetchNearbyStationProps {
  tmX?: number | null;
  tmY?: number | null;
  lat: number | null;
  lng: number | null;
}

const fetchNearbyStation = async ({
  tmX,
  tmY,
  lat,
  lng,
}: FetchNearbyStationProps): Promise<APIResponse> => {
  if (!tmX || !tmY || !lat || !lng) {
    return {
      pm10: null,
      precipitation: null,
      temperature: null,
      weather: null,
    };
  }

  const NEAR_BY_STATION_URL = process.env.NEAR_BY_STATION_URL;
  const SERVICE_KEY = process.env.SERVICE_KEY;

  try {
    if (!SERVICE_KEY) {
      throw new Error("API_KEY 존재하지 않습니다.");
    }
    const URL = `${NEAR_BY_STATION_URL}?serviceKey=${encodeURIComponent(SERVICE_KEY)}&returnType=json&tmX=${tmX}&tmY=${tmY}`;
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error("네트워크 응답에 문제가 발생했습니다." + response.status);
    }

    const data: StationData = await response.json();

    const stationName = data.response.body.items[0].stationName;

    let finalResult: APIResponse = {
      pm10: null,
      precipitation: null,
      temperature: null,
      weather: null,
    };

    const secondApiPromise = fetchAirQuality(stationName);
    const thirdApiPromise = fetchWeatherForecast({ lat, lng });

    const results: PromiseResult<any>[] = await Promise.allSettled([
      secondApiPromise,
      thirdApiPromise,
    ]);

    results.forEach((result) => {
      if (result.status === "fulfilled") {
        finalResult = { ...finalResult, ...result.value };
      } else {
      }
    });

    return finalResult;
  } catch (error) {
    const weatherData = await fetchWeatherForecast({ lat, lng });

    if (!weatherData) {
      return {
        pm10: null,
        precipitation: null,
        temperature: null,
        weather: null,
      };
    }
    const { precipitation, temperature, weather } = weatherData;
    return {
      pm10: null,
      precipitation,
      temperature,
      weather,
    };
  }
};

export default fetchNearbyStation;
