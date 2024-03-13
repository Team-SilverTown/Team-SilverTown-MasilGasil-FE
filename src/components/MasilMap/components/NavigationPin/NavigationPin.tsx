"use client";

import * as S from "./NavigationPin.styles";

import { GeoPosition } from "@/types/OriginDataType";
import { OnClickPin } from "../../MasilMap.types";
import { CustomOverlayMap } from "react-kakao-maps-sdk";

interface NavigationPinProps {
  position: GeoPosition;

  onClickPin?: OnClickPin;
  pinIndex?: number;

  key?: string | number;
}

const NavigationPin = ({ position, onClickPin, pinIndex }: NavigationPinProps) => {
  const handleClick = () => {
    if (!onClickPin || typeof pinIndex === "undefined") {
      return;
    }

    onClickPin(pinIndex);
  };
  return (
    <CustomOverlayMap position={position}>
      <S.NavigationPinBackground onClick={handleClick}>
        <S.NavigationPinBody />
      </S.NavigationPinBackground>
    </CustomOverlayMap>
  );
};

export default NavigationPin;
