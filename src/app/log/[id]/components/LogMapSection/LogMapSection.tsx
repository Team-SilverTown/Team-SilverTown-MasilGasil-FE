import { GeoPosition } from "@/types/OriginDataType";

import MasilMap from "@/components/MasilMap/MasilMap";
import { Button } from "@/components";
import { Center } from "@/components/icons";

import * as S from "./LogMapSection.styles";
import { MasilDetailResponse } from "@/types/Response";

interface LogMapSectionProps {
  masilData: MasilDetailResponse;
  currentPinIndex: number;
  mapCenter: GeoPosition;
  handlePinIndex: (pinIndex: number) => void;
  handleClickCenter: () => void;
}

const LogMapSection = ({
  masilData,
  mapCenter,
  currentPinIndex,
  handlePinIndex,
  handleClickCenter,
}: LogMapSectionProps) => {
  return (
    <S.MapContainer>
      <MasilMap
        center={mapCenter}
        path={masilData.path}
        pins={masilData.pins}
        onClickPin={handlePinIndex}
        selectedPinIndex={currentPinIndex}
        isShowCenterMarker={false}
      />
      <S.ButtonWrapper>
        <Button
          variant="neumorp"
          useRipple={true}
          style={{ padding: "1rem" }}
          onClickHandler={handleClickCenter}
        >
          <Center />
        </Button>
      </S.ButtonWrapper>
    </S.MapContainer>
  );
};

export default LogMapSection;
