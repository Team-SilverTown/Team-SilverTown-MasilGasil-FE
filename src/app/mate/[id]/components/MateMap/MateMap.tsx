"use client";

import MasilMap from "@/components/MasilMap/MasilMap";
import * as S from "./MateMap.styles";
import { MateDetailResponse } from "@/types/Response";
import { Button } from "@/components";
import { Center } from "@/components/icons";
import useMasilMapStore from "@/components/MasilMap/store/useMasilMapStore";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { POST_KEY } from "@/lib/api/queryKeys";
import { getPostDetail } from "@/lib/api/Post/client";
import { useUI } from "@/components/uiContext/UiContext";
import { MatePointPin } from "@/components/MasilMap/components";
import useTheme from "@/lib/hooks/useTheme";

interface MateMapProps {
  mateData: MateDetailResponse;
}

const MateMap = ({ mateData }: MateMapProps) => {
  const { gatheringPlacePoint, gatheringPlaceDetail } = mateData;
  const { setModalView, openModal } = useUI();
  const theme = useTheme();

  const { setIsOutCenter } = useMasilMapStore();
  const [mapCenter, setMapCenter] = useState(gatheringPlacePoint);
  const [region, setRegion] = useState("");

  const { data: postData } = useQuery({
    queryKey: [POST_KEY.GET_POST],
    queryFn: async () => await getPostDetail({ id: mateData.postId.toString() }),
  });

  useEffect(() => {
    kakao.maps.load(() => {
      const geo = new kakao.maps.services.Geocoder();

      geo.coord2RegionCode(gatheringPlacePoint.lng, gatheringPlacePoint.lat, (result, status) => {
        if (status !== kakao.maps.services.Status.OK) {
          return;
        }

        setRegion(result[0].address_name);
      });
    });
  }, []);

  const handleClickCenterButton = () => {
    setIsOutCenter(false);
    setMapCenter(gatheringPlacePoint);
  };

  const handleClickPin = (pinIndex: number) => {
    if (!postData) {
      return;
    }
    const { pins } = postData;

    setMapCenter(pins[pinIndex].point);
    setIsOutCenter(false);

    setModalView("PIN_DETAIL_MODAL_VIEW");
    openModal({
      pin: pins[pinIndex],
    });
  };

  return (
    <>
      <S.MateMapTitle>모임 장소</S.MateMapTitle>
      <S.MateMapRegion>{region}</S.MateMapRegion>
      <S.MateMapWrapper>
        <MasilMap
          center={mapCenter}
          path={postData?.path}
          pins={postData?.pins}
          onClickPin={handleClickPin}
          isShowCenterMarker={false}
          innerElement={
            <MatePointPin
              position={mateData.gatheringPlacePoint}
              fill={theme?.red_500}
            />
          }
        />
        <Button
          style={{
            padding: "0.6rem",
            position: "absolute",
            bottom: "0.6rem",
            right: "0.8rem",
            boxShadow: "0 0 7px 2px rgba(0,0,0,0.2)",
          }}
          onClickHandler={handleClickCenterButton}
        >
          <Center size={28} />
        </Button>
      </S.MateMapWrapper>
      <S.MateGatherPlace>{gatheringPlaceDetail}</S.MateGatherPlace>
    </>
  );
};

export default MateMap;
