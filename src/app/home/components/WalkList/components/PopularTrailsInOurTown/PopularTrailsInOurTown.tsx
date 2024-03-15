"use client";

import { useCallback, useEffect } from "react";

import useUserLocationStore from "@/stores/useUserLocationStore";

import getDetailedAddress from "@/app/home/utils/getDetailedAddress";

import PopularWalkList from "./components/PopularWalkList";
import useGeoLocationUtils from "@/hooks/useGeoLocationUtils";

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
