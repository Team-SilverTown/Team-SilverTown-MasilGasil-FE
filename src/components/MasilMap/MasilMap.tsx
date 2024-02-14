import style from "./MasilMap.style.module.css";

import { GeoJSONPoint } from "@/types/OriginDataType";
import { Map } from "react-kakao-maps-sdk";
import CenterMarker from "./components/CenterMarker/CenterMarker";

interface MasilMapProps {
  center: GeoJSONPoint;
  isShowCenterMarker?: boolean;
  centerMarkerSize?: number;
  centerMarkerFill?: string;
}

const MasilMap = ({
  center,
  isShowCenterMarker = true,
  centerMarkerSize,
  centerMarkerFill,
}: MasilMapProps) => {
  const [lat, lng] = center.coordinates;
  return (
    <Map
      center={{ lat, lng }}
      className={style.masil__map}
    >
      {isShowCenterMarker && (
        <CenterMarker
          position={{ lat, lng }}
          size={centerMarkerSize}
          fill={centerMarkerFill}
        />
      )}
    </Map>
  );
};

export default MasilMap;
