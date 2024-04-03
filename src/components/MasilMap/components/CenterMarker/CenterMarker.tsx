"use client";

import * as S from "./CenterMarker.styles";

import { CustomOverlayMap } from "react-kakao-maps-sdk";

import mascot from "@/assets/Maesil_Mascot.png";
import { GeoPosition } from "@/types/OriginDataType";

import Image from "next/image";

interface CenterMarkerProps {
  size?: number;
  position: GeoPosition;
}

const CenterMarker = ({ position, size = 44 }: CenterMarkerProps) => {
  return (
    <CustomOverlayMap position={position}>
      <S.CenterMarkerLayout
        $width={size}
        $height={size}
        style={{ pointerEvents: "none" }}
      >
        <Image
          sizes="100%"
          fill
          src={mascot}
          alt="Map_center"
        />
      </S.CenterMarkerLayout>
    </CustomOverlayMap>
  );
};

export default CenterMarker;
