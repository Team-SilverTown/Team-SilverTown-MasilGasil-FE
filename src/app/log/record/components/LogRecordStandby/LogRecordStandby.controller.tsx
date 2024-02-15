import { useEffect } from "react";
import LogRecordStandbyView from "./LogRecordStandby.view";
import {
  OnErrorWatcher,
  SetPageStep,
  SetWatchCode,
  UpdateUserLocation,
} from "../../LogRecord.types";

interface LogRecordStandbyControllerProps {
  watchCode: number;
  setPageStep: SetPageStep;
  setWatchCode: SetWatchCode;
  onErrorWatcher: OnErrorWatcher;
  updateUserLocation: UpdateUserLocation;
}

const LogRecordStandbyController = ({
  watchCode,
  setPageStep,
  setWatchCode,
  onErrorWatcher,
  updateUserLocation,
}: LogRecordStandbyControllerProps) => {
  useEffect(() => {
    /**
     * @summary watchPosition은 고유의 number를 반환합니다.
     *
     * @summary enableHighAccuracy 옵션은 사용자의 기기에 배터리 소비를 증가시키지만 위치 정확도를 높여줍니다.
     */
    const newWatchCode = navigator.geolocation.watchPosition(updateUserLocation, onErrorWatcher, {
      enableHighAccuracy: true,
    });

    setWatchCode(newWatchCode);

    return () => {
      navigator.geolocation.clearWatch(watchCode);
    };
  }, []);

  const handleStartRecord = () => {
    setPageStep("LOG_RECORD_RECORDING");
  };

  return <LogRecordStandbyView onClick={handleStartRecord} />;
};

export default LogRecordStandbyController;
