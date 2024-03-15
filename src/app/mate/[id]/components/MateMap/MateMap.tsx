"use client";

import MasilMap from "@/components/MasilMap/MasilMap";
import * as S from "./MateMap.styles";
import { MateDetailResponse } from "@/types/Response";
import { Button } from "@/components";
import { Center } from "@/components/icons";
import useMasilMapStore from "@/components/MasilMap/store/useMasilMapStore";
import { useEffect, useState } from "react";

interface MateMapProps {
  mateData: MateDetailResponse;
}

const KAKAO_API_KEY = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
const URL = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&libraries=services,clusterer,drawing&autoload=false`;

const MateMap = ({ mateData }: MateMapProps) => {
  const { gatheringPlacePoint, gatheringPlaceDetail } = mateData;

  const { setIsOutCenter } = useMasilMapStore();
  const [mapCenter, setMapCenter] = useState(gatheringPlacePoint);
  const [region, setRegion] = useState("");

  useEffect(() => {
    kakao.maps.load(() => {
      const geo = new kakao.maps.services.Geocoder();

      geo.coord2RegionCode(gatheringPlacePoint.lng, gatheringPlacePoint.lat, (result, status) => {
        if (status !== kakao.maps.services.Status.OK) {
          return;
        }

        setRegion(result[0].address_name);
      });
    });
  }, []);

  const handleClickCenterButton = () => {
    setIsOutCenter(false);
    setMapCenter(gatheringPlacePoint);
  };

  return (
    <>
      <S.MateMapTitle>모임 장소</S.MateMapTitle>
      <S.MateMapRegion>{region}</S.MateMapRegion>
      <S.MateMapWrapper>
        <MasilMap center={mapCenter} />
        <Button
          style={{
            padding: "0.6rem",
            position: "absolute",
            bottom: "0.6rem",
            right: "0.8rem",
            boxShadow: "0 0 7px 2px rgba(0,0,0,0.2)",
          }}
          onClickHandler={handleClickCenterButton}
        >
          <Center size={28} />
        </Button>
      </S.MateMapWrapper>
      <S.MateGatherPlace>{gatheringPlaceDetail}</S.MateGatherPlace>
    </>
  );
};

export default MateMap;
