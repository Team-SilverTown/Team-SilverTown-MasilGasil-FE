import { useState } from "react";

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

const NEAR_BY_STATION_URL = process.env.NEXT_PUBLIC_NEAR_BY_STATION_URL;
const AIR_QUALITY_URL = process.env.NEXT_PUBLIC_AIR_QUALITY_URL;
const SERVICE_KEY = process.env.NEXT_PUBLIC_SERVICE_KEY;

const useGetAirQuality = () => {
  const [pm10, setPm10] = useState<number | null>(null);
  const [address, setAddress] = useState("");

  const fetchAirQuality = async (stationName: string) => {
    // 공공 데이터 포털에서 발급받은 API 키
    const url = `${AIR_QUALITY_URL}?stationName=${encodeURIComponent(stationName)}&dataTerm=DAILY&pageNo=1&numOfRows=1&returnType=json&serviceKey=${SERVICE_KEY}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.error("HTTP Error: " + response.status);
      }

      const data = await response.json();
      if (data.response.body.items.length > 0) {
        const airQualityData = data.response.body.items[0];
        setPm10(airQualityData.pm10Value);
      } else {
        throw new Error("해당 측정소의 미세먼지 정보가 없습니다.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getNearbyStation = async (tmX: number, tmY: number) => {
    try {
      if (!SERVICE_KEY) {
        throw new Error("API_KEY 존재하지 않습니다.");
      }
      const response = await fetch(
        `${NEAR_BY_STATION_URL}?serviceKey=${encodeURIComponent(SERVICE_KEY)}&returnType=json&tmX=${tmX}&tmY=${tmY}`,
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = (await response.json()) as StationData;

      const [_1, address] = data.response.body.items[0].addr.split(" ");
      const stationName = data.response.body.items[0].stationName;

      setAddress(`${address} ${stationName}`);
      fetchAirQuality(stationName);
    } catch (error) {
      console.error(`Error fetching nearby station data: ${error}`);
    }
  };

  return {
    pm10,
    address,
    getNearbyStation,
  };
};

export default useGetAirQuality;
