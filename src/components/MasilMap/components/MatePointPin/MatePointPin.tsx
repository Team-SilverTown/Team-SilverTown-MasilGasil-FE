"use client";

import * as S from "./MatePointPin.styles";

import { CustomOverlayMap } from "react-kakao-maps-sdk";
import { GeoPosition } from "@/types/OriginDataType";

interface MatePointPinProps {
  size?: number;
  fill?: string;
  position: GeoPosition;
}

const MatePointPin = ({ position, size = 32, fill = "black" }: MatePointPinProps) => {
  return (
    <CustomOverlayMap position={position}>
      <S.MatePointPinLayout
        $width={size}
        $height={size}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          fill={fill}
        >
          <path d="M479.983-11Q317-11 214-62.925T111-197q0-47 37.5-86.5T254-348l60 113q-20 5-43.5 15T236-199q20.29 24.8 93.645 43.4Q403-137 481.2-137t151.033-18.6Q705.067-174.2 725-199q-11-11-34-21t-43-15l61-112q66 25 103 64.5t37 85.5q0 82.15-103.017 134.075Q642.965-11 479.983-11ZM480-387q11-20 24-39t35-48q34-46 62.5-89t28.5-94q0-63.076-43.741-107.038Q542.518-808 479.759-808T373.5-764.038Q330-720.076 330-657q0 51 28.5 94t62.5 89q22 29 35 48t24 39Zm0 210q-18.586 0-33.793-11T426-216q-20-63-57-114t-74-101q-36.861-50.058-63.93-103.529Q204-588 204-657q0-116.387 80.024-196.693Q364.047-934 480.024-934 596-934 676-853.693 756-773.387 756-657q0 69-27 122.5T665-431q-37 50-74 101t-57 114q-5 17-20.207 28T480-177Zm.25-392Q517-569 543-594.5t26-62.25q0-36.75-26.25-63t-63-26.25Q443-746 417-719.75t-26 63q0 36.75 26.25 62.25t63 25.5Zm-.25-88Z" />
        </svg>
      </S.MatePointPinLayout>
    </CustomOverlayMap>
  );
};

export default MatePointPin;
