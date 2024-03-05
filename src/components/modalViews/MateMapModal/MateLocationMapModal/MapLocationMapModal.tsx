"use client";

import MasilMap from "@/components/MasilMap/MasilMap";
import * as GS from "../MateMapModal.styles";
import * as S from "./MapLocationMapModal.styles";

import { ModalLayout } from "@/components/Modal";
import { MateGatheringPlace } from "@/types/OriginDataType";
import CustomPin from "@/components/MasilMap/components/CustomPin/CustomPin";
import { Button } from "@/components";
import useTheme from "@/lib/hooks/useTheme";
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import { Center } from "@/components/icons";
import useMasilMapStore from "@/components/MasilMap/store/useMasilMapStore";

interface MateLocationMapModalProps {
  gatherPlace: MateGatheringPlace;
}

interface ModalProp {
  props: MateLocationMapModalProps;
}

const MateLocationMapModal = ({ props }: ModalProp) => {
  const { gatherPlace } = props;
  const { point, detail } = gatherPlace;
  const { setIsOutCenter } = useMasilMapStore();
  const theme = useTheme();

  return (
    <ModalLayout
      style={{
        position: "relative",
        paddingRight: "1rem",
        paddingLeft: "1rem",
        paddingBottom: "2rem",
        paddingTop: "5rem",
      }}
    >
      <GS.MapModalLayout>
        <GS.MapModalTitle>모임 장소</GS.MapModalTitle>
        <GS.MapWrapper style={{ marginBottom: "2rem" }}>
          <MasilMap
            center={gatherPlace.point}
            isShowCenterMarker={false}
            style={{ borderRadius: "1rem" }}
            innerElement={
              <CustomPin
                position={point}
                size={28}
              />
            }
          />

          <Button
            style={{
              padding: "0.6rem",
              position: "absolute",
              bottom: "0.6rem",
              right: "0.6rem",
              boxShadow: "0 0 7px 2px rgba(0,0,0,0.2)",
            }}
            onClickHandler={() => setIsOutCenter(false)}
          >
            <Center size={20} />
          </Button>
        </GS.MapWrapper>

        <S.MapLocationModalDetail>{detail}</S.MapLocationModalDetail>

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
        >
          닫기
        </Button>
      </GS.MapModalLayout>
    </ModalLayout>
  );
};

export default MateLocationMapModal;
