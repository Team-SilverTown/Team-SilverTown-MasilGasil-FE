"use client";

import { useEffect, useState } from "react";
import useUserLocationStore from "@/stores/useUserLocationStore";
import useGetCurrentPosition from "./hook/useGetCurrentPosition";
import useGetWeatherForecast from "./hook/useGetweatherForecast";
import convertLatLonToGrid from "./utils/convertLatLonToGrid";

const useHomeModel = () => {
  const [isNotification] = useState<null | boolean>(null);

  const { setUserLocation } = useUserLocationStore();
  const { location } = useGetCurrentPosition();
  const { getWeatherForecast, temperature, weather, precipitation } = useGetWeatherForecast();

  const getNearbyStation = async (tmX: number, tmY: number) => {
    console.log(tmX, tmY);
    try {
      const response = await fetch(
        `http://apis.data.go.kr/B552584/MsrstnInfoInqireSvc/getNearbyMsrstnList?serviceKey=${encodeURIComponent("Pj8xFP6BMcRU4ICxL6h3YCLA76ohQ2aL2l28ccdU7qXCcRn1KwyQgKR5dGB1fNcJRmywBU79iIlZuP3uKgM5XA==")}&returnType=json&tmX=${tmX}&tmY=${tmY}`,
      );

      console.log(response);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = (await response.json()) as StationData;

      console.log(data);
    } catch (error) {
      console.error(`Error fetching nearby station data: ${error}`);
    }
  };

  interface StationData {
    response: {
      body: {
        items: {
          stationName: string;
        }[];
      };
    };
  }

  // interface AirPollutionData {}

  // async function getAirPollutionData() {
  //   try {
  //     const response = await fetch(
  //       `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${encodeURIComponent(
  //         "Q4YR47JM1hmM9KU06DLKaXXlRNt2bhiiUWMdVReCoExzz58GCA9299/eLsYBNdO/p5of4K9mhba4V88RwtXo3w==",
  //       )}&returnType=json&numOfRows=100&pageNo=1&sidoName=경기&ver=1.0`,
  //     );

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const data = (await response.json()) as any;

  //     console.log(data);
  //   } catch (error) {
  //     console.error(`Error fetching air pollution data: ${error}`);
  //   }
  // }

  useEffect(() => {
    getWeatherForecast(location);

    if (location.lat > 0 && location.lng > 0) {
      setUserLocation(location);
    }
  }, [location]);

  useEffect(() => {
    const coords = convertLatLonToGrid("toXY", location.lat, location.lng, "TM"); // 위도와 경도를 TM 좌표계로 변환
    console.log("location", location);
    console.log("coords", coords);
    const tmX = coords.x;
    const tmY = coords.y;

    if (tmX && tmY && tmX > 0 && tmY > 0) {
      getNearbyStation(tmX, tmY);
    }
  }, [location]);

  return {
    isNotification,
    temperature,
    weather,
    precipitation,
  };
};

export default useHomeModel;
