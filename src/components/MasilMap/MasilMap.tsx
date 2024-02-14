import style from "./MasilMap.style.module.css";

import {
  GeoJSONLineString,
  GeoJSONPoint,
  KakaoFormatPin,
  KakaoFormatPosition,
  Pin,
} from "@/types/OriginDataType";
import { Map } from "react-kakao-maps-sdk";
import CenterMarker from "./components/CenterMarker/CenterMarker";
import PathLine from "./components/PathLine/PathLine";
import { useMemo } from "react";
import { OnClickPin, OnCreatePath, PathLineWeight } from "./MasilMap.types";
import CustomPin from "./components/CustomPin/CustomPin";

interface MasilMapProps {
  center: GeoJSONPoint;
  path: GeoJSONLineString;
  pins: Pin[];

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

  onClickPin?: OnClickPin;
  pinSize?: number;
}

const MasilMap = ({
  center,
  path,
  pins,

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

  onClickPin,
  pinSize,
}: MasilMapProps) => {
  const [lat, lng] = center.coordinates;

  /**
   * @summary
   * 기존 geoJSON 형식인 Position형태를 Kakao Api에서 사용 가능한 데이터 타입으로 변형합니다.
   * ( geLocation.watchPosition으로 인해 많은 상태변화로 useMemo 사용 )
   */
  const kakaoFormatPosition: KakaoFormatPosition[] = useMemo(() => {
    return path.coordinates.map(([lat, lng]) => ({ lat, lng }));
  }, [path]);

  /**
   * @summary
   * 기존 geoJSON 형식인 PinList를 Kakao Api에서 사용 가능한 데이터 타입으로 변형합니다.
   *    * ( geLocation.watchPosition으로 인해 많은 상태변화로 useMemo 사용 )
   */
  const kakaoFormatPin: KakaoFormatPin[] = useMemo(() => {
    return pins.map((prevPoint) => {
      const [lat, lng] = prevPoint.point.coordinates;

      return {
        ...prevPoint,
        point: { lat, lng },
      };
    });
  }, [pins]);

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
        path={kakaoFormatPosition}
        onCreatePath={onCreatePath}
        pathColor={pathColor}
        pathOpacity={pathOpacity}
        pathWeight={pathWeight}
      />

      {kakaoFormatPin &&
        kakaoFormatPin.map(({ point }) => (
          <CustomPin
            position={point}
            size={pinSize}
            onClickPin={onClickPin && onClickPin}
          />
        ))}
    </Map>
  );
};

export default MasilMap;
