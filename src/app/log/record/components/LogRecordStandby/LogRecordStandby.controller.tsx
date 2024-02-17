import { useEffect } from "react";
import LogRecordStandbyView from "./LogRecordStandby.view";
import {
  OnErrorWatcher,
  SetLogData,
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
  setLogData: SetLogData;
}

const LogRecordStandbyController = ({
  watchCode,
  setWatchCode,
  setPageStep,
  setLogData,
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

  /**
   * @summary 사용자의 현 위치 좌표를 기반으로 주소를 반환합니다.
   *
   * - 만약 주소를 찾을 수 없거나 정상적인 주소를 반환받지 못한다면 홈으로 유도합니다.
   */
  const handleStartRecord = () => {
    const updateAddress = ({ coords }: GeolocationPosition) => {
      const { latitude, longitude } = coords;
      const goe = new kakao.maps.services.Geocoder();

      goe.coord2RegionCode(longitude, latitude, (result, status) => {
        if (status !== kakao.maps.services.Status.OK) {
          // 추후 에러 처리
          return;
        }

        const { region_1depth_name, region_2depth_name, region_3depth_name, region_4depth_name } =
          result[0];

        setLogData((prevData) => ({
          ...prevData,
          address: {
            depth1: region_1depth_name,
            depth2: region_2depth_name,
            depth3: region_3depth_name,
            depth4: region_4depth_name,
          },
        }));
      });
    };

    navigator.geolocation.getCurrentPosition(updateAddress, onErrorWatcher, {
      enableHighAccuracy: true,
    });

    setPageStep("LOG_RECORD_RECORDING");
  };

  return <LogRecordStandbyView onClick={handleStartRecord} />;
};

export default LogRecordStandbyController;
