import { useEffect } from "react";
import LogRecordStandbyView from "./LogRecordStandby.view";
import { HandleWatchError, UpdateUserLocation } from "../../LogRecord.types";

interface LogRecordStandbyControllerProps {
  watchCode: number;
  setWatchCode: (code: number) => void;
  handleWatchError: HandleWatchError;
  updateUserLocation: UpdateUserLocation;
}

const LogRecordStandbyController = ({
  watchCode,
  setWatchCode,
  handleWatchError,
  updateUserLocation,
}: LogRecordStandbyControllerProps) => {
  useEffect(() => {
    /**
     * @summary watchPosition은 고유의 number를 반환합니다.
     *
     * @summary enableHighAccuracy 옵션은 사용자의 기기에 배터리 소비를 증가시키지만 위치 정확도를 높여줍니다.
     */
    const newWatchCode = navigator.geolocation.watchPosition(updateUserLocation, handleWatchError, {
      enableHighAccuracy: true,
    });

    setWatchCode(newWatchCode);

    return () => {
      navigator.geolocation.clearWatch(watchCode);
    };
  }, []);

  return <LogRecordStandbyView onClick={() => {}} />;
};

export default LogRecordStandbyController;
