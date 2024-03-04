"use client";

import { Map } from "react-kakao-maps-sdk";
import * as GS from "./MateMapModal.styles";
import * as S from "./MateCreateMapModal.styles";

import { ModalLayout } from "@/components/Modal";
import { useState } from "react";
import { GeoPosition } from "@/types/OriginDataType";
import CustomPin from "@/components/MasilMap/components/CustomPin/CustomPin";
import { Button, Input, InputLabel } from "@/components";
import { useForm } from "react-hook-form";
import { FONT_WEIGHT } from "@/styles/theme";

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
  const { register, getValues, formState, handleSubmit } = useForm({
    defaultValues: { detail: "" },
  });
  const { errors } = formState;

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

  const onValid = ({ detail }: { detail: string }) => {};

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

        <Button onClickHandler={handleSubmit(onValid)}>수정 완료</Button>
      </GS.MapModalLayout>
    </ModalLayout>
  );
};

export default MateCreateMapModal;
