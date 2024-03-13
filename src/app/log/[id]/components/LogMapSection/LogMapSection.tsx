import { MasilsDataType } from "../../Log.constants";
import { GeoPosition } from "@/types/OriginDataType";

import MasilMap from "@/components/MasilMap/MasilMap";
import { Button } from "@/components";
import { Center } from "@/components/icons";

import * as S from "./LogMapSection.styles";

interface LogMapSectionProps {
  masilsData: MasilsDataType;
  currentPinIndex: number;
  mapCenter: GeoPosition;
  handlePinIndex: (pinIndex: number) => void;
  handleClickCenter: () => void;
}

const LogMapSection = ({
  masilsData,
  mapCenter,
  currentPinIndex,
  handlePinIndex,
  handleClickCenter,
}: LogMapSectionProps) => {
  return (
    <S.MapContainer>
      <MasilMap
        center={mapCenter}
        path={masilsData.path}
        pins={masilsData.pins}
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
