import { GeoPosition } from "@/types/OriginDataType";

const EARTH_RADIUS = 6371;

const getTwoPointDistance = (newPin: GeoPosition, checkPin: GeoPosition) => {
  const degLat = (newPin.lat - checkPin.lat) * (Math.PI / 180);
  const degLng = (newPin.lng - checkPin.lng) * (Math.PI / 180);

  // 위도와 경도를 차이를 이용한 중간 계산값
  const distanceCalc =
    Math.sin(degLat / 2) * Math.sin(degLat / 2) +
    Math.cos(newPin.lat * (Math.PI / 180)) *
      Math.cos(checkPin.lat * (Math.PI / 180)) *
      Math.sin(degLng / 2) *
      Math.sin(degLng / 2);

  // 이후 루트를 씌운 후 역탄젠트를 구한 값
  const centralAngle = 2 * Math.atan2(Math.sqrt(distanceCalc), Math.sqrt(1 - distanceCalc));

  const distance = EARTH_RADIUS * centralAngle * 1000; // Distance in m

  return distance;
};

export default getTwoPointDistance;
