import { Dispatch, SetStateAction, useEffect } from "react";
import LogRecordStandbyView from "./LogRecordStandby.view";
import { OnErrorWatcher, UpdateUserLocation } from "../../LogRecord.types";
import { useUI } from "@/components/uiContext/UiContext";

import useLogRecordContext from "../../context/LogRecordContext";

interface LogRecordStandbyControllerProps {
  onErrorWatcher: OnErrorWatcher;
  updateUserLocation: UpdateUserLocation;
}

const LogRecordStandbyController = ({
  onErrorWatcher,
  updateUserLocation,
}: LogRecordStandbyControllerProps) => {
  const { startRecord } = useLogRecordContext();
  const { showLoadingSpinner } = useUI();

  useEffect(() => {
    /**
     * @summary watchPosition은 고유의 number를 반환합니다.
     *
     * @summary enableHighAccuracy 옵션은 사용자의 기기에 배터리 소비를 증가시키지만 위치 정확도를 높여줍니다.
     */
    const watchCode = navigator.geolocation.watchPosition(updateUserLocation, onErrorWatcher, {
      enableHighAccuracy: true,
    });

    return () => {
      navigator.geolocation.clearWatch(watchCode);
    };
  }, []);

  // Stay

  const handleStartRecord = () => {
    showLoadingSpinner();

    navigator.geolocation.getCurrentPosition(startRecord, onErrorWatcher, {
      enableHighAccuracy: true,
    });
  };

  return <LogRecordStandbyView onClick={handleStartRecord} />;
};

export default LogRecordStandbyController;
