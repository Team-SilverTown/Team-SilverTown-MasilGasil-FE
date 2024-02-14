import style from "./MasilMap.style.module.css";

import { GeoJSONLineString, GeoJSONPoint, KakaoPosition } from "@/types/OriginDataType";
import { Map } from "react-kakao-maps-sdk";
import CenterMarker from "./components/CenterMarker/CenterMarker";
import PathLine from "./components/PathLine/PathLine";
import { useMemo } from "react";
import { OnCreatePath, PathLineWeight } from "./MasilMap.types";

interface MasilMapProps {
  center: GeoJSONPoint;
  path: GeoJSONLineString;

  draggable?: boolean;
  zoomable?: boolean;
  minZoomLevel?: number;
  maxZoomLevel?: number;

  isShowCenterMarker?: boolean;
  centerMarkerSize?: number;
  centerMarkerFill?: string;

  onCreatePath?: OnCreatePath;
  pathColor?: string;
  pathOpacity?: number;
  pathWeight?: PathLineWeight;
}

const MasilMap = ({
  center,
  path,

  draggable = true,
  zoomable = true,
  minZoomLevel,
  maxZoomLevel,

  isShowCenterMarker = true,
  centerMarkerSize,
  centerMarkerFill,

  onCreatePath,
  pathColor,
  pathOpacity,
  pathWeight,
}: MasilMapProps) => {
  const [lat, lng] = center.coordinates;

  const convertedPath: KakaoPosition[] = useMemo(() => {
    return path.coordinates.map(([lat, lng]) => ({ lat, lng }));
  }, [path]);

  return (
    <Map
      center={{ lat, lng }}
      className={style.masil__map}
      draggable={draggable}
      zoomable={zoomable}
      minLevel={minZoomLevel && minZoomLevel}
      maxLevel={maxZoomLevel && maxZoomLevel}
    >
      {isShowCenterMarker && (
        <CenterMarker
          position={{ lat, lng }}
          size={centerMarkerSize}
          fill={centerMarkerFill}
        />
      )}

      <PathLine
        path={convertedPath}
        onCreatePath={onCreatePath}
        pathColor={pathColor}
        pathOpacity={pathOpacity}
        pathWeight={pathWeight}
      />
    </Map>
  );
};

export default MasilMap;
