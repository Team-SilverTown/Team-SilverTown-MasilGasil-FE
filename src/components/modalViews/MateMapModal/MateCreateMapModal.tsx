"use client";

import { Map } from "react-kakao-maps-sdk";
import * as GS from "./MateMapModal.styles";
import * as S from "./MateCreateMapModal.styles";

import { ModalLayout } from "@/components/Modal";
import { useRef, useState } from "react";
import { GeoPosition } from "@/types/OriginDataType";
import CustomPin from "@/components/MasilMap/components/CustomPin/CustomPin";
import { Button, Input, InputLabel } from "@/components";
import { useForm } from "react-hook-form";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import useTheme from "@/lib/hooks/useTheme";
import { MapPin } from "@/components/icons";
import { debounce } from "lodash";

interface MateMapModalProps {
  baseLocation: GeoPosition;
  onSubmit: () => void;
}

interface ModalProp {
  props: MateMapModalProps;
}

const MateCreateMapModal = ({ props }: ModalProp) => {
  const { baseLocation } = props;
  const [center, setCenter] = useState(baseLocation);
  const [address, setAddress] = useState("");
  const theme = useTheme();
  const { register, formState, handleSubmit } = useForm({
    defaultValues: { detail: "" },
  });
  const { errors } = formState;

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

  const onValid = ({ detail }: { detail: string }) => {
    if (detail) {
      console.log(detail);
      console.log(center);
      return;
    }

    console.log(address);
    console.log(center);
  };

  return (
    <ModalLayout
      style={{
        paddingRight: "1rem",
        paddingLeft: "1rem",
        paddingBottom: "2rem",
        paddingTop: "4.6rem",
      }}
    >
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
          <S.MateCreateMapTitle>장소 추가정보 입력</S.MateCreateMapTitle>
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
