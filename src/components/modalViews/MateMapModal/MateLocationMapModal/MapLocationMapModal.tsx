"use client";

import MasilMap from "@/components/MasilMap/MasilMap";
import * as GS from "../MateMapModal.styles";

import { ModalLayout } from "@/components/Modal";
import { MateGatheringPlace } from "@/types/OriginDataType";
import CustomPin from "@/components/MasilMap/components/CustomPin/CustomPin";
import { useMemo } from "react";

interface MateLocationMapModalProps {
  gatherPlace: MateGatheringPlace;
}

interface ModalProp {
  props: MateLocationMapModalProps;
}

const MateLocationMapModal = ({ props }: ModalProp) => {
  const { gatherPlace } = props;
  const { point, detail } = gatherPlace;

  const address = useMemo(() => {}, [point]);

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
        <GS.MapWrapper>
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
        </GS.MapWrapper>
      </GS.MapModalLayout>
    </ModalLayout>
  );
};

export default MateLocationMapModal;
