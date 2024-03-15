"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import useUserLocationStore from "@/stores/useUserLocationStore";

import getDetailedAddress from "@/app/home/utils/getAddress";
import showErrorMessage from "@/app/home/utils/showErrorMessage";

import { More } from "@/components/icons";
import PopularWalkList from "./components/PopularWalkList";

import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import * as S from "./PopularTrailsInOurTown.styles";

const PopularTrailsInOurTown = () => {
  const [location, setLocation] = useState({
    lat: 0,
    lng: 0,
  });
  const { userAddress, setUserAddress } = useUserLocationStore();

  const showYourLocation = async ({ coords }: GeolocationPosition) => {
    const lat = coords.latitude;
    const lng = coords.longitude;

    if (lat > 0 && lng > 0) {
      setLocation({ lat, lng });
    }
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

  return (
    <section className={S.WalkListSection}>
      <article className={S.HomeWalkListArticle}>
        <h3 style={{ fontSize: FONT_SIZE.LARGE, fontWeight: FONT_WEIGHT.BOLD }}>
          우리 동네 인기 산책로
        </h3>
        <Link href="/more?keyword=area_popular&order=popular">
          <More />
        </Link>
      </article>
      <PopularWalkList userAddress={userAddress} />
    </section>
  );
};

export default PopularTrailsInOurTown;
