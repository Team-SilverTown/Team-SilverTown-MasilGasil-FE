"use client";

import { useCallback, useEffect, useState } from "react";

import useUserLocationStore from "@/stores/useUserLocationStore";

import getDetailedAddress from "@/app/home/utils/getDetailedAddress";
import showErrorMessage from "@/app/home/utils/showErrorMessage";

import PopularWalkList from "./components/PopularWalkList";

const PopularTrailsInOurTown = () => {
  const [location, setLocation] = useState({
    lat: 0,
    lng: 0,
  });
  const { userAddress, setUserAddress } = useUserLocationStore();

  const showYourLocation = async ({ coords }: GeolocationPosition) => {
    const lat = coords.latitude;
    const lng = coords.longitude;

    setLocation({ lat, lng });
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

  return <PopularWalkList userAddress={userAddress} />;
};

export default PopularTrailsInOurTown;
