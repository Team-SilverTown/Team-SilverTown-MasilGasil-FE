"use client";

import { useCallback, useEffect } from "react";

import getDetailedAddress from "@/app/home/utils/getDetailedAddress";
import useGeoLocationUtils from "@/hooks/useGeoLocationUtils";
import useUserLocationStore from "@/lib/stores/useUserLocationStore";

import PopularWalkList from "./components/PopularWalkList";

const PopularTrailsInOurTown = () => {
  const { userLocation, userAddress, setUserAddress } = useUserLocationStore();
  const { updateUserLocation, onErrorWatch } = useGeoLocationUtils();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(updateUserLocation, onErrorWatch);
  }, []);

  const getAddress = useCallback(async () => {
    if (!userLocation.lat || !userLocation.lng) {
      return;
    }

    const MyAddress = await getDetailedAddress({ lat: userLocation.lat, lng: userLocation.lng });

    if (!MyAddress) {
      return;
    }

    setUserAddress(MyAddress);
  }, [userLocation.lat, userLocation.lng]);

  useEffect(() => {
    getAddress();
  }, [getAddress]);

  return <PopularWalkList userAddress={userAddress} />;
};

export default PopularTrailsInOurTown;
