import MasilMap from "@/components/MasilMap/MasilMap";
import { GeoJSONPoint } from "@/types/OriginDataType";

interface LogRecordStandbyViewProps {
  center: GeoJSONPoint;
  onClick: () => void;
}

const LogRecordStandbyView = ({ onClick, center }: LogRecordStandbyViewProps) => {
  const { coordinates } = center;
  console.log(coordinates);
  return (
    <>
      <MasilMap center={center} />
    </>
  );
};

export default LogRecordStandbyView;
