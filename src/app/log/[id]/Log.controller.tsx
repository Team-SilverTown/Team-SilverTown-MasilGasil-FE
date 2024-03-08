import LogView from "./Log.view";
import { MASILS_DATA } from "./Log.constants";
import { GeoPosition } from "@/types/OriginDataType";

interface LogControllerProps {
  baseLocation: GeoPosition;
}

const LogController = ({ baseLocation }: LogControllerProps) => {
  return (
    <LogView
      masilsData={MASILS_DATA}
      baseLocation={baseLocation}
    />
  );
};

export default LogController;
