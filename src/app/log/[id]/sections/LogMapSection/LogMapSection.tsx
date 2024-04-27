import { Button } from "@/components";
import MasilMap from "@/components/MasilMap/MasilMap";
import { Center } from "@/components/icons";
import { GeoPosition } from "@/types/OriginDataType";
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
    <section className="relative h-[45%] w-full">
      <MasilMap
        center={mapCenter}
        path={masilData.path}
        pins={masilData.pins}
        onClickPin={handlePinIndex}
        selectedPinIndex={currentPinIndex}
        isShowCenterMarker={false}
      />
      <div className="absolute bottom-[1rem] right-[1rem] z-[1]">
        <Button
          variant="neumorp"
          useRipple={true}
          style={{ padding: "1rem" }}
          onClickHandler={handleClickCenter}
        >
          <Center />
        </Button>
      </div>
    </section>
  );
};

export default LogMapSection;
