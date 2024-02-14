import { useEffect } from "react";
import LogRecordStandbyView from "./LogRecordStandby.view";
import { GeoJSONPoint, KakaoPosition } from "@/types/OriginDataType";

interface LogRecordStandbyControllerProps {
  center: GeoJSONPoint;
  watchCode: number;
  setWatchCode: (code: number) => void;
  onChangeCenter: (coords: KakaoPosition) => void;
}

const LogRecordStandbyController = ({
  center,
  watchCode,
  setWatchCode,
  onChangeCenter,
}: LogRecordStandbyControllerProps) => {
  const successWatch = ({ coords }: GeolocationPosition) => {
    onChangeCenter({ lat: coords.latitude, lng: coords.longitude });
  };

  const errorWatch = () => {};

  const handleClick = () => {
    const newWatchCode = navigator.geolocation.watchPosition(successWatch, errorWatch, {
      enableHighAccuracy: true,
    });

    setWatchCode(newWatchCode);
  };

  useEffect(() => {
    return () => {
      navigator.geolocation.clearWatch(watchCode);
      console.log("Standby Component cleanUp");
    };
  }, []);

  return (
    <LogRecordStandbyView
      onClick={handleClick}
      center={center}
    />
  );
};

export default LogRecordStandbyController;
