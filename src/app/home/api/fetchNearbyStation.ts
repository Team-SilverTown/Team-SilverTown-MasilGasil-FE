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
  address: string;
  pm10: number | null;
  precipitation: PrecipitationType | null;
  temperature: string | null;
  weather: WeatherType | null;
}

const fetchNearbyStation = async (
  tmX: number,
  tmY: number,
  lat: number,
  lng: number,
): Promise<APIResponse> => {
  const NEAR_BY_STATION_URL = process.env.NEXT_PUBLIC_NEAR_BY_STATION_URL;
  const SERVICE_KEY = process.env.NEXT_PUBLIC_SERVICE_KEY;

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

    const [_1, address] = data.response.body.items[0].addr.split(" ");
    const stationName = data.response.body.items[0].stationName;

    let finalResult: APIResponse = {
      address: `${address} ${stationName}`,
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
        // 결과 객체에 value를 추가
        finalResult = { ...finalResult, ...result.value };
      } else {
        console.error(result.reason);
      }
    });

    return finalResult;
  } catch (error) {
    console.error(`주변 측정소 데이터를 가져오는 중 오류가 발생했습니다. ${error}`);
    return {
      address: "",
      pm10: null,
      precipitation: null,
      temperature: null,
      weather: null,
    };
  }
};

export default fetchNearbyStation;
