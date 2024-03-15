"use client";

import MasilMap from "@/components/MasilMap/MasilMap";
import * as S from "./MateMap.styles";
import { MateDetailResponse } from "@/types/Response";
import { Button } from "@/components";
import { Center } from "@/components/icons";
import useMasilMapStore from "@/components/MasilMap/store/useMasilMapStore";
import { useState } from "react";

interface MateMapProps {
  mateData: MateDetailResponse;
}

const MateMap = ({ mateData }: MateMapProps) => {
  const { gatheringPlacePoint, gatheringPlaceDetail } = mateData;

  const { setIsOutCenter } = useMasilMapStore();
  const [mapCenter, setMapCenter] = useState(gatheringPlacePoint);

  // 추후 path pin 데이터 추가시 활용 예정
  const handleClickCenterButton = () => {
    setIsOutCenter(false);
    setMapCenter(gatheringPlacePoint);
  };

  return (
    <>
      <S.MateMapTitle>모임 장소</S.MateMapTitle>
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
