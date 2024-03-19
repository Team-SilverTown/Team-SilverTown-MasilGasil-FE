import { GeoPosition } from "@/types/OriginDataType";

const EARTH_RADIUS = 6371;

/**
 * @func getTwoPointDistance
 * @param newPosition 새로운 위치
 * @param checkPosition 비교할 대상의 위치
 *
 * @brief 두개의 포인트를 가지고 서로의 거리를 구해주는 함수입니다.
 *
 * 함수를 호출할때 newPosition 과 checkPosition에 전달하는 인수 자리가 변경되어도 상관없음.
 *
 * @returns M 단위로 두 포인트의 거리를 반환함
 */
const getTwoPointDistance = (newPosition: GeoPosition, checkPosition: GeoPosition) => {
  const degLat = (newPosition.lat - checkPosition.lat) * (Math.PI / 180);
  const degLng = (newPosition.lng - checkPosition.lng) * (Math.PI / 180);

  const distanceCalc =
    Math.sin(degLat / 2) * Math.sin(degLat / 2) +
    Math.cos(newPosition.lat * (Math.PI / 180)) *
      Math.cos(checkPosition.lat * (Math.PI / 180)) *
      Math.sin(degLng / 2) *
      Math.sin(degLng / 2);

  const centralAngle = 2 * Math.atan2(Math.sqrt(distanceCalc), Math.sqrt(1 - distanceCalc));

  const distance = EARTH_RADIUS * centralAngle * 1000;

  return distance;
};

export default getTwoPointDistance;
