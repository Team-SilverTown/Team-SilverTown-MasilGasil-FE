"use client";

import { Map } from "react-kakao-maps-sdk";
import * as GS from "./MateMapModal.styles";

import { ModalLayout } from "@/components/Modal";
import { useState } from "react";
import { GeoPosition } from "@/types/OriginDataType";

interface MateMapModalProps {
  baseLocation: GeoPosition;
  onClickMap: () => void;
}

interface ModalProp {
  props: MateMapModalProps;
}

const MateCreateMapModal = ({ props }: ModalProp) => {
  const { baseLocation } = props;
  const [center, setCenter] = useState(baseLocation);

  const handleChangeCenter = (target: kakao.maps.Map, mouseEvent?: kakao.maps.event.MouseEvent) => {
    if (mouseEvent) {
      const { latLng } = mouseEvent;
      setCenter({
        lat: latLng.getLat(),
        lng: latLng.getLng(),
      });
      return;
    }

    const center = target.getCenter();

    setCenter({
      lat: center.getLat(),
      lng: center.getLng(),
    });
  };

  console.log(center);

  return (
    <ModalLayout
      style={{
        paddingRight: "0.5rem",
        paddingLeft: "0.5rem",
        paddingBottom: "2rem",
        paddingTop: "4.6rem",
      }}
    >
      <GS.MapModalLayout>
        <GS.MapWrapper>
          <Map
            center={center}
            className="w-full h-full"
            onCenterChanged={handleChangeCenter}
            onClick={handleChangeCenter}
          />
        </GS.MapWrapper>
      </GS.MapModalLayout>
    </ModalLayout>
  );
};

export default MateCreateMapModal;
