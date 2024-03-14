"use client";

import MasilMap from "@/components/MasilMap/MasilMap";
import * as S from "./MateMap.styles";

const MateMap = () => {
  return (
    <S.MateMapWrapper>
      <MasilMap center={{ lat: 0, lng: 0 }} />
    </S.MateMapWrapper>
  );
};

export default MateMap;
