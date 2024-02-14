import style from "./MasilMap.style.module.css";

import { GeoJSONPoint } from "@/types/OriginDataType";
import { Map } from "react-kakao-maps-sdk";
import CenterMarker from "./components/CenterMarker/CenterMarker";

interface MasilMapProps {
  isShowCenterMarker?: boolean;
  center: GeoJSONPoint;
}

const MasilMap = ({ center, isShowCenterMarker = true }: MasilMapProps) => {
  const [lat, lng] = center.coordinates;
  return (
    <Map
      center={{ lat, lng }}
      className={style.masil__map}
    >
      {isShowCenterMarker && (
        <CenterMarker
          position={{ lat, lng }}
          size={100}
          fill="orange"
        />
      )}
    </Map>
  );
};

export default MasilMap;
