import { useEffect } from "react";
import LogRecordStandbyView from "./LogRecordStandby.view";
import { useUI } from "@/components/uiContext/UiContext";

import useLogRecordContext from "../../context/LogRecordContext";
import useGeoLocationUtils from "../../../../../hooks/useGeoLocationUtils";

const useLogRecordStandbyController = () => {
  const { onErrorWatch, updateUserLocation } = useGeoLocationUtils();
  const { startRecord } = useLogRecordContext();
  const { showLoadingSpinner } = useUI();

  useEffect(() => {
    /**
     * @summary watchPosition은 고유의 number를 반환합니다.
     *
     * @summary enableHighAccuracy 옵션은 사용자의 기기에 배터리 소비를 증가시키지만 위치 정확도를 높여줍니다.
     */
    const watchCode = navigator.geolocation.watchPosition(updateUserLocation, onErrorWatch, {
      enableHighAccuracy: true,
    });

    return () => {
      navigator.geolocation.clearWatch(watchCode);
    };
  }, []);

  /**
   * @summary 기록을 시작할때 현재 사용자의 위치를 기준으로 준비 작업을 실행합니다.
   */
  const handleStartRecord = () => {
    showLoadingSpinner();

    navigator.geolocation.getCurrentPosition(startRecord, onErrorWatch, {
      enableHighAccuracy: true,
    });
  };

  return {
    handleStartRecord,
  };
};

export default useLogRecordStandbyController;
