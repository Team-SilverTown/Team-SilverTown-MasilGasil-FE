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
  pinColor?: string;
  pinSelectColor?: string;
  pinFontColor?: string;
  selectedPinIndex?: number;
}

/**
 * @summary MasilGasil 프로젝트에서 내에서  사용가능한 Map!
 *
 * @param center 지도의 center 위치 - type : GeoJSONPoint
 * @param path 이동 경로의 좌표값들  - type : GeoJSONLineString
 * @param pins 핀 리스트 - type : Pin
 *
 * @param draggable 지도의 드래그 허용 여부 - type : boolean
 * @param zoomable 지도의 확대 여부 - type : boolean
 * @param minZoomLevel 지도의 최소 줌 level - type : number
 * @param maxZoomLevel 지도의 최대 줌 level - type : number
 *
 * @param isShowCenterMarker 현재 사용자의 위치에 중앙 마커가 보일지 여부 - type : boolean
 * @param centerMarkerSize 중앙 마커의 크기 ( 기본값 32px ) - type : number (px)
 * @param centerMarkerFill 중앙 마커의 색상 - type : string
 *
 * @param onCreatePath 이동 경로가 그려질때 마다 발동하는 이벤트 함수 ( 거리 계산에 이용 ) - type : (polyline: kakao.maps.Polyline) => void;
 * @param pathColor 이동 경로의 색상 - type : string
 * @param pathOpacity 이동 경로의 투명도 - type : 0 ~ 1
 * @param pathWeight 이동 경로의 두께 - type : 1 2 3 4 5 6 7 8 9 10
 *
 * @param onClickPin 핀 클릭 이벤트 - type : 미정
 * @param pinSize 핀의 사이즈 ( 기본값 24px ) - type : number ( px )
 * @param pinColor 핀의 색상을 변경 - type : string
 * @param pinSelectColor 선택된 핀의 색상을 변경 - type : string
 * @param pinFontColor 핀 내부 폰트의 색상을 변경 - type : string
 * @param selectedPinIndex 현재 선택된 핀의 index 번호 - type : number
 */
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
  pinColor,
  pinSelectColor,
  pinFontColor,
  selectedPinIndex,
}: MasilMapProps) => {
  const [lat, lng] = center.coordinates;
  const centerPosition = { lat, lng };

  /**
   * @summary
   * 기존 geoJSON 형식인 Position형태를 Kakao Api에서 사용 가능한 데이터 타입으로 변형합니다.
   *
   * ( geLocation.watchPosition으로 인해 많은 상태변화로 useMemo 사용 )
   */
  const kakaoFormatPath: KakaoFormatPosition[] = useMemo(() => {
    return path.coordinates.map(([lat, lng]) => ({ lat, lng }));
  }, [path]);

  /**
   * @summary
   * 기존 geoJSON 형식인 PinList를 Kakao Api에서 사용 가능한 데이터 타입으로 변형합니다.
   *
   * ( geLocation.watchPosition으로 인해 많은 상태변화로 useMemo 사용 )
   */
  const kakaoFormatPins: KakaoFormatPin[] = useMemo(() => {
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
      center={centerPosition}
      className={style.masil__map}
      draggable={draggable}
      zoomable={zoomable}
      minLevel={minZoomLevel && minZoomLevel}
      maxLevel={maxZoomLevel && maxZoomLevel}
    >
      {isShowCenterMarker && (
        <CenterMarker
          position={centerPosition}
          size={centerMarkerSize}
          fill={centerMarkerFill}
        />
      )}

      {kakaoFormatPath && (
        <PathLine
          path={kakaoFormatPath}
          onCreatePath={onCreatePath}
          pathColor={pathColor}
          pathOpacity={pathOpacity}
          pathWeight={pathWeight}
        />
      )}

      {kakaoFormatPins &&
        kakaoFormatPins.map(({ point }, index) => (
          <CustomPin
            key={`${point.lat}${point.lng}${index}`}
            position={point}
            size={pinSize}
            onClickPin={onClickPin && onClickPin}
            pinIndex={index + 1}
            pinColor={pinColor}
            pinSelectColor={pinSelectColor}
            pinFontColor={pinFontColor}
            isSelected={selectedPinIndex === index}
          />
        ))}
    </Map>
  );
};

export default MasilMap;
