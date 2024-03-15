import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Map } from "react-kakao-maps-sdk";
import throttle from "lodash.throttle";
import debounce from "lodash.debounce";

import useUserLocationStore from "@/stores/useUserLocationStore";
import { GeoPosition } from "@/types/OriginDataType";
import { useUI } from "@/components/uiContext/UiContext";
import { LOG_RECORD_MESSAGE } from "@/app/log/record/LogRecord.constants";
import { Button } from "@/components";
import { Center } from "@/components/icons";

import * as S from "./MapSection.styles";
import { CenterMarker } from "@/components/MasilMap/components";

declare global {
  interface Window {
    kakao: any;
  }
}

interface MapSectionProps {
  setLocationData: Dispatch<
    SetStateAction<{
      depth1: string;
      depth2: string;
      depth3: string;
      depth4: string;
    } | null>
  >;
}

const MapSection = ({ setLocationData }: MapSectionProps) => {
  const mapRef = useRef<kakao.maps.Map | null>(null);

  const { openModal, setModalView } = useUI();

  const { userLocation, setUserLocation } = useUserLocationStore();


  const [mapCenter, setMapCenter] = useState<GeoPosition>({ lat: 0, lng: 0 });

  const updateMapCenter = ({ coords }: GeolocationPosition) =>
    setMapCenter({ lat: coords.latitude, lng: coords.longitude });

  const updateUserLocation = useRef(
    throttle(({ coords }: GeolocationPosition) => {
      const { latitude, longitude } = coords;
      setUserLocation({ lat: latitude, lng: longitude });
    }, 1000),
  ).current;

  /**
   * @summary watcher가 오류가 발생했을때 수행할 동작을 위한 함수입니다.
   * @param PERMISSION_DENIED 사용자가 위치 서비스를 동의 하지 않았는지를 파악할때 code와 비교하는 용도로 사용되어집니다.
   */
  const handleWatchError = ({ code, PERMISSION_DENIED }: GeolocationPositionError) => {
    setModalView("LOG_RECORD_ALERT_VIEW");

    if (code === PERMISSION_DENIED) {
      openModal({
        message: LOG_RECORD_MESSAGE.ERROR.WATCH_PERMISSION_DENIED,
      });
    }

    openModal({
      message: LOG_RECORD_MESSAGE.ERROR.WATCH_ERROR,
    });
  };

  useEffect(() => {
    const watchCode = navigator.geolocation.watchPosition(updateUserLocation, handleWatchError, {
      enableHighAccuracy: true,
    });

    // 사용자 위치로 center 초기화
    navigator.geolocation.getCurrentPosition(updateMapCenter, handleWatchError, {
      enableHighAccuracy: true,
    });

    return () => {
      navigator.geolocation.clearWatch(watchCode);
    };
  }, []);

  const updateAddress = ({ lat, lng }: GeoPosition) => {
    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.coord2RegionCode(lng, lat, (result, status) => {
      if (status !== kakao.maps.services.Status.OK) {
        return;
      }

      const { region_1depth_name, region_2depth_name, region_3depth_name, region_4depth_name } =
        result[0];

      setLocationData(() => ({
        depth1: region_1depth_name,
        depth2: region_2depth_name,
        depth3: region_3depth_name,
        depth4: region_4depth_name,
      }));
    });
  };

  const centerChangehandler = useRef(
    debounce((target: kakao.maps.Map) => {
      const center = target.getCenter();

      updateAddress({ lat: center.getLat(), lng: center.getLng() });
    }, 1000),
  ).current;

  const panToUserLocation = () => {
    setMapCenter({ lat: userLocation.lat, lng: userLocation.lng });
    const moveLatLng = new kakao.maps.LatLng(userLocation.lat, userLocation.lng);
    mapRef.current?.panTo(moveLatLng);
  };

  return (
    <S.MapSection>
      <Map
        ref={mapRef}
        center={mapCenter}
        onCenterChanged={centerChangehandler}
        style={{
          width: "100%",
          height: "100%",
        }}
        draggable={true}
      >
        <CenterMarker position={userLocation} />
        <S.ButtonWrapper>
          <Button
            variant="neumorp"
            useRipple={true}
            style={{ padding: "1rem" }}
            onClickHandler={panToUserLocation}
          >
            <Center />
          </Button>
        </S.ButtonWrapper>
      </Map>
    </S.MapSection>
  );
};

export default MapSection;
