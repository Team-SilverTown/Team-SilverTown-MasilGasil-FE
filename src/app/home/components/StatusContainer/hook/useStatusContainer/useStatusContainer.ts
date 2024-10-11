import { useCallback, useEffect, useState } from "react";

import fetchNearbyStation from "@/app/home/api/fetchNearbyStation";
import { convertLatLonToTM, getDetailedAddress, showErrorMessage } from "@/app/home/utils";
import { WEATHER_KEY } from "@/lib/api/queryKeys";
import {
  useGeoLocationStore,
  useVisitCheckTimeStore,
  useWeatherStore,
} from "@/lib/stores/useLocationDataStore";
import useUserLocationStore from "@/lib/stores/useUserLocationStore";
import { useQuery } from "@tanstack/react-query";

import locationCompare from "../../utils/locationCompare";
import timeCompare from "../../utils/timeCompare";

const useStatusContainer = () => {
  const [isClient, setIsClient] = useState(false);
  const [isFetchRequired, setIsFetchRequired] = useState(false);
  const { location, setLocation } = useGeoLocationStore();
  const { weatherData, setWeatherData } = useWeatherStore();
  const { time, setTime } = useVisitCheckTimeStore();

  const { userAddress, setUserLocation, setUserAddress } = useUserLocationStore();

  const { data: weatherInfo, isLoading } = useQuery({
    queryKey: [WEATHER_KEY.GET_WEATHER_DATA],
    queryFn: () => fetchNearbyStation(location),
    enabled:
      !!location.lat && !!location.lng && !!location.tmX && !!location.tmY && isFetchRequired,
  });

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

  const showYourLocation = useCallback(
    ({ coords }: GeolocationPosition) => {
      const lat = coords.latitude;
      const lng = coords.longitude;
      const { x: tmX, y: tmY } = convertLatLonToTM(lat, lng);

      const isLocationCompare = locationCompare(location, { lat, lng, tmX, tmY });
      const isTimeCompare = timeCompare(time, 1);

      if (isLocationCompare || isTimeCompare) {
        setIsFetchRequired(true);
        setTime(new Date());
        setLocation({ lat, lng, tmX, tmY });
        setUserLocation({ lat, lng });
        GetDetailedAddress();
      }
    },
    [location, time, GetDetailedAddress],
  );

  useEffect(() => {
    if (!isClient) {
      return;
    }

    navigator.geolocation.getCurrentPosition(showYourLocation, showErrorMessage);
  }, [isClient]);

  useEffect(() => {
    if (!isClient) {
      return;
    }

    if (weatherInfo && JSON.stringify(weatherData) !== JSON.stringify(weatherInfo)) {
      setWeatherData(weatherInfo);
    }
  }, [weatherInfo, isClient]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return {
    weatherData,
    userAddress,
    isClient,
    isLoading,
  };
};

export default useStatusContainer;
