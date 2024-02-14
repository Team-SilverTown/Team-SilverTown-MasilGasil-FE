import MasilMap from "@/components/MasilMap/MasilMap";
import { GeoJSONPoint } from "@/types/OriginDataType";
import { MasilRecordRequest } from "@/types/Request";

interface LogRecordStandbyViewProps {
  center: GeoJSONPoint;
  logData: MasilRecordRequest;
  onClick: () => void;
}

const LogRecordStandbyView = ({ onClick, center, logData }: LogRecordStandbyViewProps) => {
  console.log(logData);
  return (
    <>
      <MasilMap center={center} />
    </>
  );
};

export default LogRecordStandbyView;
