"use client";

import { useCallback, useEffect, useState } from "react";

import { HomeWeatherSkeleton } from "@/components/skeletons";
import { WEATHER_KEY } from "@/lib/api/queryKeys";
import useUserLocationStore from "@/lib/stores/useUserLocationStore";
import { useQuery } from "@tanstack/react-query";

import fetchNearbyStation from "../../api/fetchNearbyStation";
import { convertLatLonToTM, getDetailedAddress, showErrorMessage } from "../../utils";
import StatusItem from "./components/StatusItem/StatusItem";
import { evaluatePineDust } from "./utils";

const WEATHER_ICON = {
  맑음: "☀️",
  구름조금: "🌤️",
  흐림: "☁️",
  비: "🌧️",
  진눈개비: "🌨️",
  눈: "☃️",
  없음: null,
};

interface LocationType {
  lat: number | null;
  lng: number | null;
  tmX: number | null;
  tmY: number | null;
}

const StatusContainer = () => {
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
  const fineDustValue = evaluatePineDust(pm10);

  return (
    <article className="flex items-center justify-between px-4">
      <section>
        <StatusItem
          icon="📍"
          label={`${userAddress.depth2} ${userAddress.depth3}`}
        />
      </section>

      <section className="flex items-center gap-3">
        <StatusItem
          icon="🌡️"
          label={temperature}
        />
        <div className="h-2 w-2 rounded-full bg-gray-200" />
        <StatusItem
          icon={weatherIcon}
          label={weather?.toString()}
        />
        <div className="h-2 w-2 rounded-full bg-gray-200" />
        <StatusItem
          icon="😷"
          label={fineDustValue}
        />
      </section>
    </article>
  );
};

export default StatusContainer;
