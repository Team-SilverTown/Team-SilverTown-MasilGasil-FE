"use client";

import * as S from "./MyLocationWeather.styles";

import { useCallback, useEffect, useState } from "react";

import {
  ClearSky,
  FineDust,
  Location,
  Overcast,
  PartlyCloudy,
  Rainy,
  Sleet,
  Snowy,
} from "@/components/icons";
import { HomeWeatherSkeleton } from "@/components/skeletons";
import { WEATHER_KEY } from "@/lib/api/queryKeys";
import useUserLocationStore from "@/lib/stores/useUserLocationStore";
import { useQuery } from "@tanstack/react-query";

import fetchNearbyStation from "../../api/fetchNearbyStation";
import { convertLatLonToTM, getDetailedAddress, showErrorMessage } from "../../utils";

const WEATHER_ICON = {
  맑음: <ClearSky />,
  구름조금: <PartlyCloudy />,
  흐림: <Overcast />,
  비: <Rainy />,
  진눈개비: <Sleet />,
  눈: <Snowy />,
  없음: null,
};

interface LocationType {
  lat: number | null;
  lng: number | null;
  tmX: number | null;
  tmY: number | null;
}

const MyLocationWeather = () => {
  const [location, setLocation] = useState<LocationType>({
    lat: null,
    lng: null,
    tmX: null,
    tmY: null,
  });

  const { userAddress, setUserLocation, setUserAddress } = useUserLocationStore();

  const { data: weatherData, isLoading } = useQuery({
    queryKey: [WEATHER_KEY.GET_WEATHER_DATA],
    queryFn: () => fetchNearbyStation(location),
    enabled: !!location.lat && !!location.lng && !!location.tmX && !!location.tmY,
    staleTime: 60 * 1000 * 10,
    gcTime: 60 * 1000 * 15,
  });

  const showYourLocation = ({ coords }: GeolocationPosition) => {
    const lat = coords.latitude;
    const lng = coords.longitude;

    const { x: tmX, y: tmY } = convertLatLonToTM(lat, lng);

    setLocation({ lat, lng, tmX, tmY });
    setUserLocation({ lat, lng });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(showYourLocation, showErrorMessage);
  }, []);

  const GetDetailedAddress = useCallback(async () => {
    if (!location.lat || !location.lng) {
      return;
    }

    const MyAddress = await getDetailedAddress({ lat: location.lat, lng: location.lng });

    if (!MyAddress) {
      return;
    }

    setUserAddress(MyAddress);
  }, [location.lat, location.lng]);

  useEffect(() => {
    GetDetailedAddress();
  }, [GetDetailedAddress]);

  if (!weatherData || isLoading) {
    return <HomeWeatherSkeleton />;
  }

  const { precipitation, weather, pm10, temperature } = weatherData;

  const weatherIcon =
    precipitation && weather ? WEATHER_ICON[precipitation] || WEATHER_ICON[weather] : null;
  const pm10Value = findDust(pm10);

  return (
    <S.MyLocationWeatherLayout>
      <S.MyLocation>
        {userAddress && (
          <>
            <Location style={{ marginRight: "0.5rem" }} />
            <span>
              {userAddress.depth1} {userAddress.depth2} {userAddress.depth3}
            </span>
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
          {pm10Value && (
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
