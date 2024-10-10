import { useCallback, useEffect, useState } from "react";

import fetchNearbyStation from "@/app/home/api/fetchNearbyStation";
import { convertLatLonToTM, getDetailedAddress, showErrorMessage } from "@/app/home/utils";
import { WEATHER_KEY } from "@/lib/api/queryKeys";
import {
  useLocationStore,
  useSaveTimeStore,
  useWeatherStore,
} from "@/lib/stores/useLocationDataStore";
import useUserLocationStore from "@/lib/stores/useUserLocationStore";
import { useQuery } from "@tanstack/react-query";

import locationCompare from "../../utils/locationCompare";
import timeCompare from "../../utils/timeCompare";

const useStatusContainer = () => {
  const [isClient, setIsClient] = useState(false);
  const [isFetchRequired, setIsFetchRequired] = useState(false);
  const { location, setLocation } = useLocationStore();
  const { weatherData, setWeatherData } = useWeatherStore();
  const { time, setTime } = useSaveTimeStore();

  const { userAddress, setUserLocation, setUserAddress } = useUserLocationStore();

  const { data: weatherInfo, isLoading } = useQuery({
    queryKey: [WEATHER_KEY.GET_WEATHER_DATA],
    queryFn: () => fetchNearbyStation(location),
    enabled:
      !!location.lat && !!location.lng && !!location.tmX && !!location.tmY && isFetchRequired,
  });

  const showYourLocation = ({ coords }: GeolocationPosition) => {
    const lat = coords.latitude;
    const lng = coords.longitude;
    const { x: tmX, y: tmY } = convertLatLonToTM(lat, lng);

    const isLocationCompare = locationCompare(location, { lat, lng, tmX, tmY });
    const isTimeCompare = timeCompare(time, 30);

    if (isLocationCompare || isTimeCompare) {
      setIsFetchRequired(true);
      setTime(new Date());
      setLocation({ lat, lng, tmX, tmY });
      setUserLocation({ lat, lng });
    }
  };

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

  return {
    weatherData,
    userAddress,
    isClient,
    isLoading,
  };
};

export default useStatusContainer;
