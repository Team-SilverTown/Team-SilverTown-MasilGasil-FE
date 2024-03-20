"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import useMateCreateModel from "./MateCreate.model";
import MateCreateView from "./MateCreate.view";
import { MateCreateRequest } from "@/types/Request";
import { DEFAULT_MATE_CREATE_VALUE } from "./MateCreate.constants";
import { GeoPosition } from "@/types/OriginDataType";
import { useMutation } from "@tanstack/react-query";
import { postMateCreate } from "@/lib/api/Mate/client";
import { MATE_KEY } from "@/lib/api/queryKeys";
import { useRouter } from "next/navigation";
import { useUI } from "@/components/uiContext/UiContext";

interface MateCreateControllerProps {
  lat: number;
  lng: number;
  postId: string;
}

const MateCreateController = ({ lat, lng, postId }: MateCreateControllerProps) => {
  const router = useRouter();
  const { setModalView, openModal } = useUI();
  const {
    isFormFilled,
    setIsFormFilled,
    capacity,
    setCapacity,
    startDate,
    setStartDate,
    startTime,
    setStartTime,
    gatheringPlaceDetail,
    setGatheringPlaceDetail,
  } = useMateCreateModel();

  const mateCreateMutation = useMutation({
    mutationKey: [MATE_KEY.POST_CREATE_MATE],
    mutationFn: async (mateData: MateCreateRequest) => await postMateCreate({ mateData }),
  });

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<MateCreateRequest>({
    mode: "onChange",
    defaultValues: DEFAULT_MATE_CREATE_VALUE,
  });

  useEffect(() => {
    kakao.maps.load(() => {
      const geocoder = new kakao.maps.services.Geocoder();

      geocoder.coord2RegionCode(lng, lat, (result, status) => {
        if (status !== kakao.maps.services.Status.OK) {
          return;
        }
        const { region_1depth_name, region_2depth_name, region_3depth_name, region_4depth_name } =
          result[0];

        setValue("depth1", region_1depth_name);
        setValue("depth2", region_2depth_name);
        setValue("depth3", region_3depth_name);
        setValue("depth4", region_4depth_name);
      });
    });

    setValue("postId", Number(postId));
  }, [postId]);

  const watchedFields = watch();
  useEffect(() => {
    const allFieldsFilled = !!(
      watchedFields.title &&
      watchedFields.content &&
      startDate &&
      startTime &&
      capacity &&
      gatheringPlaceDetail
    );
    setIsFormFilled(allFieldsFilled);
  }, [watchedFields, startDate, startTime, setCapacity, gatheringPlaceDetail]);

  // TODO : 추후 useEffect가아닌 별도 핸들러로 변경될 수 있또록 변경
  useEffect(() => {
    const date = startDate
      ? new Date(startDate.getTime() - startDate.getTimezoneOffset() * 60000)
          .toISOString()
          .substring(0, 10)
      : "";
    const time = startTime ? startTime.toISOString().substring(11, 19) : "";
    const gatheringAt = `${date}T${time}.000Z`;

    setValue("gatheringAt", gatheringAt);
  }, [startDate, startTime]);

  const handleCapacityChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = target;
    setCapacity(value);
    setValue("capacity", Number(value));
  };

  const handleGatheringPlaceSubmit = ({
    detail,
    point,
  }: {
    detail: string;
    point: GeoPosition;
  }) => {
    setValue("gatheringPlacePoint.lat", point.lat);
    setValue("gatheringPlacePoint.lng", point.lng);

    setGatheringPlaceDetail(detail);
    setValue("gatheringPlaceDetail", detail);
  };

  const onValid = (data: MateCreateRequest) => {
    mateCreateMutation.mutate(data, {
      onSuccess: ({ id }) => {
        setModalView("DONE_VIEW");
        openModal({ message: "메이트 모집이<br>정상적으로 등록되었습니다!" });
        router.replace(`/mate/${id}`);
      },
      onError: () => {
        setModalView("ANIMATION_ALERT_VIEW");
        openModal({
          message: "메이트 모집하기 생성에 실패하였습니다.<br>잠시 후 다시 이용해주세요.",
        });
      },
    });
  };

  return (
    <MateCreateView
      register={register}
      handleSubmit={handleSubmit(onValid)}
      isFormFilled={isFormFilled}
      handleCapacityChange={handleCapacityChange}
      startDate={startDate}
      setStartDate={setStartDate}
      startTime={startTime}
      setStartTime={setStartTime}
      capacity={capacity}
      gatheringPlaceDetail={gatheringPlaceDetail}
      handleGatheringPlaceSubmit={handleGatheringPlaceSubmit}
      postStartPoint={{ lat, lng }}
    />
  );
};

export default MateCreateController;
