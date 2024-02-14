import { useEffect } from "react";
import LogRecordStandbyView from "./LogRecordStandby.view";
import { KakaoPosition } from "@/types/OriginDataType";

interface LogRecordStandbyControllerProps {
  watchCode: number;
  setWatchCode: (code: number) => void;
  onChangeCenter: (coords: KakaoPosition) => void;
}

const LogRecordStandbyController = ({
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

  return <LogRecordStandbyView onClick={handleClick} />;
};

export default LogRecordStandbyController;
