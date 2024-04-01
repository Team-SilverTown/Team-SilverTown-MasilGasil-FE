import Theme from "@/styles/theme";

import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";
import { Map } from "react-kakao-maps-sdk";

import { GeoPosition, Pin } from "@/types/OriginDataType";

import { OnClickPin, OnCreatePathLine, PathLineWeight } from "./MasilMap.types";
import { CenterMarker, CustomPin, NavigationPin, PathLine } from "./components";
import useMasilMapStore from "./store/useMasilMapStore";

import { debounce, throttle } from "lodash";

interface MasilMapProps {
  center: GeoPosition;
  path?: GeoPosition[];
  pins?: Pin[];

  mapWidth?: string;
  mapHeight?: string;

  draggable?: boolean;
  zoomable?: boolean;
  minZoomLevel?: number;
  maxZoomLevel?: number;

  isShowCenterMarker?: boolean;
  centerMarkerSize?: number;

  onCreatePathLine?: OnCreatePathLine;
  pathColor?: string;
  pathOpacity?: number;
  pathWeight?: PathLineWeight;

  onClickPin?: OnClickPin;
  pinSize?: number;
  pinColor?: string;
  pinSelectColor?: string;
  pinFontColor?: string;
  selectedPinIndex?: number;

  navigationPath?: GeoPosition[];
  navigationPins?: Pin[];
  onClickNavigationPin?: (pinIndex: number) => void;

  style?: CSSProperties;
  innerElement?: ReactNode;
}

/**
 * @summary MasilGasil 프로젝트에서 내에서  사용가능한 Map!
 *
 * @param center 지도의 center 위치 - type : GeoPosition
 * @param path 이동 경로의 좌표값들  - type : GeoPosition[]
 * @param pins 핀 리스트 - type : Pin[]
 *
 * @param draggable 지도의 드래그 허용 여부 - type : boolean
 * @param zoomable 지도의 확대 여부 - type : boolean
 * @param minZoomLevel 지도의 최소 줌 level - type : number
 * @param maxZoomLevel 지도의 최대 줌 level - type : number
 *
 * @param isShowCenterMarker 현재 사용자의 위치에 중앙 마커가 보일지 여부 - type : boolean
 * @param centerMarkerSize 중앙 마커의 크기 ( 기본값 32px ) - type : number (px)
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
 *
 * @param navigationPath 네비게이션 경로를 보여줍니다. - type : GeoPosition[]
 * @param navigationPins 네비게이션에 등록된 핀을 보여줍니다. - type : Pin[]
 * @param onClickNavigationPin 네비게이션 핀을 클릭했을때 실행할 함수를 전달합니다. - type : (pinIndex : number) => void
 *
 * @param style map의 스타일을 지정
 * @param innerElement 별도의 원하는 Custom Map 요소
 */
const MasilMap = ({
  center,
  path,
  pins,

  mapHeight = "100%",
  mapWidth = "100%",

  draggable = true,
  zoomable = true,
  minZoomLevel,
  maxZoomLevel,

  isShowCenterMarker = true,
  centerMarkerSize,

  onCreatePathLine,
  pathColor,
  pathOpacity,
  pathWeight,

  onClickPin,
  pinSize,
  pinColor,
  pinSelectColor,
  pinFontColor,
  selectedPinIndex,

  navigationPath = [],
  navigationPins = [],
  onClickNavigationPin,

  style,
  innerElement,
}: MasilMapProps) => {
  const [outCenterPosition, setOutCenterPosition] = useState<GeoPosition>({ lat: 0, lng: 0 });
  const { isOutCenter, setIsOutCenter, isActiveMapResizing, setIsActiveMapResizing } =
    useMasilMapStore();
  const mapRef = useRef<kakao.maps.Map | null>(null);

  /**
   * @summary drag, zoom으로 인해 벗어난 Map의 center를 일정 시간 후 강제로 다시 이동시킵니다.
   */
  const offIsOutCenter = useRef(
    debounce(() => {
      setIsOutCenter(false);
    }, 2000),
  ).current;

  /**
   * @summary darg, zoom을 시작시 원활한 Map의 이동을 위해 outCenterPosition 값을 이용하고 갱신시켜줍니다.
   *
   * @param target kakao map api의 자체적인 타입값으로 Map에 대한 현재 상태를 반환해줍니다
   *
   * ( getCenter라는 메서드를 통해 사용자에게 보여지고 있는 Map을 기준으로 center값을 획득할 수 있습니다. )
   *
   * + 너무 많은 상태변화를 방지하기위해 0.2초의 throttle 적용
   */
  const handleMap = useRef(
    throttle((target: kakao.maps.Map) => {
      setIsOutCenter(true);

      const center = target.getCenter();
      setOutCenterPosition({
        lat: center.getLat(),
        lng: center.getLng(),
      });

      offIsOutCenter();
    }, 200),
  ).current;

  useEffect(() => {
    const { current } = mapRef;

    if (current) {
      setTimeout(() => {
        current.relayout();
      }, 200);
    }
    setIsActiveMapResizing(false);
  }, [mapHeight, mapWidth, isActiveMapResizing]);

  return (
    <Map
      ref={mapRef}
      center={isOutCenter ? outCenterPosition : center}
      draggable={draggable}
      zoomable={zoomable}
      minLevel={minZoomLevel && minZoomLevel}
      maxLevel={maxZoomLevel && maxZoomLevel}
      onCenterChanged={handleMap}
      style={{
        width: mapWidth,
        height: mapHeight,
        zIndex: 0,
        position: "relative",
        ...style,
      }}
      isPanto
    >
      {navigationPath.length !== 0 && (
        <PathLine
          path={navigationPath}
          pathColor={"#F7BC01"}
          pathOpacity={0.5}
          pathWeight={pathWeight}
        />
      )}

      {navigationPins.length !== 0 &&
        navigationPins.map((navPin, index) => (
          <NavigationPin
            key={index + 1}
            position={navPin.point}
            onClickPin={onClickNavigationPin}
            pinIndex={index}
          />
        ))}

      {innerElement}

      {path && path.length !== 0 && (
        <PathLine
          path={path}
          onCreatePathLine={onCreatePathLine}
          pathColor={pathColor}
          pathOpacity={pathOpacity}
          pathWeight={pathWeight}
        />
      )}

      {pins &&
        pins.length !== 0 &&
        pins.map(({ point }, index) => (
          <CustomPin
            key={`${point.lat}${point.lng}${index}`}
            position={point}
            size={pinSize}
            onClickPin={() => {
              onClickPin && onClickPin(index);
            }}
            pinIndex={index + 1}
            pinColor={
              selectedPinIndex && selectedPinIndex === index ? Theme.lightTheme.red_100 : pinColor
            }
            pinSelectColor={pinSelectColor}
            pinFontColor={pinFontColor}
            isSelected={selectedPinIndex === index}
          />
        ))}

      {isShowCenterMarker && (
        <CenterMarker
          position={center}
          size={centerMarkerSize}
        />
      )}
    </Map>
  );
};

export default MasilMap;
