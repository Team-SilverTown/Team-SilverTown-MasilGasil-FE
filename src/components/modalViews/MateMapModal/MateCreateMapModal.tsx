"use client";

import { Map } from "react-kakao-maps-sdk";
import * as GS from "./MateMapModal.styles";
import * as S from "./MateCreateMapModal.styles";

import { ModalLayout } from "@/components/Modal";
import { useEffect, useRef, useState } from "react";
import { GeoPosition, MateGatheringPlace } from "@/types/OriginDataType";
import CustomPin from "@/components/MasilMap/components/CustomPin/CustomPin";
import { Button, Input, InputLabel } from "@/components";
import { useForm } from "react-hook-form";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import useTheme from "@/lib/hooks/useTheme";
import { MapPin } from "@/components/icons";
import { debounce } from "lodash";

interface MateMapModalProps {
  baseLocation: GeoPosition;
  onSubmit: (placeInfo: MateGatheringPlace) => void;
}

interface ModalProp {
  props: MateMapModalProps;
}

const MateCreateMapModal = ({ props }: ModalProp) => {
  const { baseLocation, onSubmit } = props;
  const [center, setCenter] = useState(baseLocation);
  const [address, setAddress] = useState("");
  const theme = useTheme();
  const { register, formState, handleSubmit } = useForm({
    defaultValues: { detail: "" },
  });
  const { errors } = formState;

  /**
   * @function handleChangeCenter
   *
   * @param target Map의 onCenterChange 이벤트를 통해실행될 경우 해당 param에서 위치를 얻어냄
   * @param mouseEvent Map의 onClick 이벤트가 동작했을 경우에만 해당 param에서 위치를 얻어냄
   *
   * @summary 하나의 handle가 onChange onCenterChange 두개의 이벤트를 동시에 처리할 수 있도록 구현하였습니다.
   */
  const handleChangeCenter = (target: kakao.maps.Map, mouseEvent?: kakao.maps.event.MouseEvent) => {
    if (mouseEvent) {
      const { latLng } = mouseEvent;
      const newPosition = { lat: latLng.getLat(), lng: latLng.getLng() };

      setCenter(newPosition);
      updateAddress(newPosition);
      return;
    }

    const center = target.getCenter();
    const newPosition = { lat: center.getLat(), lng: center.getLng() };
    setCenter(newPosition);
    updateAddress(newPosition);
  };

  /**
   * @function updateAddress
   *
   * @summary 현재 center를 기준으로 현 위치의 주소를 반환합니다.
   *
   * 과도한 호출을 방지하기위해 0.5초의 debounce를 사용
   */
  const updateAddress = useRef(
    debounce(({ lat, lng }: GeoPosition) => {
      const goe = new kakao.maps.services.Geocoder();
      goe.coord2RegionCode(lng, lat, (result, status) => {
        if (status !== kakao.maps.services.Status.OK) {
          return;
        }

        const { region_2depth_name, region_3depth_name, region_4depth_name } = result[0];
        setAddress(region_2depth_name + " " + region_3depth_name + " " + region_4depth_name);
      });
    }, 500),
  ).current;

  /**
   * @function onValid
   *
   * @summary form에서 에러가 없이 처리되었을때 수행되어집니다.
   *
   * 만약 detail input 필드에 사용자가 입력한 내용이 존재한다면 detail을, 없다면 address를 onSubmit으로 내보냅니다.
   */
  const onValid = ({ detail }: { detail: string }) => {
    if (detail) {
      onSubmit({
        point: center,
        detail,
      });
      return;
    }

    onSubmit({
      point: center,
      detail: address,
    });
  };

  useEffect(() => {
    updateAddress(center);
  }, []);

  return (
    <ModalLayout
      style={{
        paddingRight: "1rem",
        paddingLeft: "1rem",
        paddingBottom: "2rem",
        paddingTop: "4rem",
      }}
    >
      <S.MateCreateMapAlert>모임 장소를 지도에서 선택해 주세요.</S.MateCreateMapAlert>
      <GS.MapModalLayout>
        <GS.MapWrapper>
          <Map
            center={center}
            className="w-full h-full rounded-2xl"
            onCenterChanged={handleChangeCenter}
            onClick={handleChangeCenter}
          >
            <CustomPin
              position={center}
              size={28}
            />
          </Map>
        </GS.MapWrapper>
        <GS.LocationAddress>
          <MapPin
            size={20}
            fill={theme?.gray_500}
            style={{ marginRight: "0.4rem" }}
          />
          {address}
        </GS.LocationAddress>

        <S.MateCreateMapDetail>
          <S.MateCreateMapTitle>모임장소 상세정보 입력</S.MateCreateMapTitle>
          <Input
            type="text"
            placeholder="장소에대한 추가정보를 입력해주세요!"
            style={{ fontWeight: FONT_WEIGHT.MEDIUM }}
            register={register("detail", {
              minLength: { value: 2, message: "2글자 이상 입력해주세요." },
              maxLength: { value: 32, message: "32글자 이내로 입력해주세요." },
            })}
          />
          <S.MateCreateWarningMessage>
            {errors.detail && (
              <InputLabel
                type="danger"
                text={errors.detail.message}
              />
            )}
          </S.MateCreateWarningMessage>
        </S.MateCreateMapDetail>

        <Button
          buttonColor={theme?.green_500}
          textColor={theme?.text_secondary_color}
          useRipple
          rippleColor={theme?.text_secondary_color + 50}
          style={{
            whiteSpace: "nowrap",
            fontSize: FONT_SIZE.LARGE,
            fontWeight: FONT_WEIGHT.SEMIBOLD,
            userSelect: "none",
          }}
          onClickHandler={handleSubmit(onValid)}
        >
          수정 완료
        </Button>
      </GS.MapModalLayout>
    </ModalLayout>
  );
};

export default MateCreateMapModal;
