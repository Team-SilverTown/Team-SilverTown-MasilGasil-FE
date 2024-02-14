import style from "./MasilMap.style.module.css";

import { GeoJSONPoint } from "@/types/OriginDataType";
import { Map } from "react-kakao-maps-sdk";

interface MasilMapProps {
  center: GeoJSONPoint;
}

const MasilMap = ({ center }: MasilMapProps) => {
  const [lat, lng] = center.coordinates;
  return (
    <Map
      center={{ lat, lng }}
      className={style.masil__map}
    ></Map>
  );
};

export default MasilMap;
