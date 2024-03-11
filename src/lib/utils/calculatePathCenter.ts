import { GeoPosition } from "@/types/OriginDataType";

const calculatePathCenter = (path: GeoPosition[]): GeoPosition => {
  const pathLength = path.length;
  const latAvg = path.reduce((total, point) => total + point.lat, 0) / pathLength;
  const lngAvg = path.reduce((total, point) => total + point.lng, 0) / pathLength;

  return {
    lat: latAvg,
    lng: lngAvg,
  };
};

export default calculatePathCenter;
