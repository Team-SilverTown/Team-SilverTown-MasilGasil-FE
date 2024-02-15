import { useCallback, useEffect, useRef } from "react";
import LogRecordRecordingView from "./LogRecordRecording.view";
import {
  OnErrorWatcher,
  SetLogData,
  SetPageStep,
  SetWatchCode,
  UpdateUserLocation,
} from "../../LogRecord.types";
import { throttle } from "lodash";
import useUserLocationStore from "@/stores/useUserLocationStore";

interface LogRecordRecordingControllerProps {
  watchCode: number;
  setLogData: SetLogData;
  setPageStep: SetPageStep;
  setWatchCode: SetWatchCode;
  onErrorWatcher: OnErrorWatcher;
  updateUserLocation: UpdateUserLocation;
}

const LogRecordRecordingController = ({
  setLogData,
  watchCode,
  setWatchCode,
  setPageStep,
  onErrorWatcher,
  updateUserLocation,
}: LogRecordRecordingControllerProps) => {
  const { userLocation } = useUserLocationStore();

  /**
   * @summary watch의 success 콜백에 들어가는 함수로 경로 값을 추가시켜줍니다.
   *
   * 단, throttle을 통해 5초에 한번 실행.
   */
  const updatePath = useRef(
    throttle(({ coords }: GeolocationPosition) => {
      const { latitude, longitude } = coords;
      setLogData((prevData) => {
        return {
          ...prevData,
          path: {
            ...prevData.path,
            coordinates: [...prevData.path.coordinates, [latitude, longitude]],
          },
        };
      });
    }, 5000),
  ).current;

  useEffect(() => {
    const newWatchCode = navigator.geolocation.watchPosition(
      (geoPosition: GeolocationPosition) => {
        updateUserLocation(geoPosition);
        updatePath(geoPosition);
      },
      onErrorWatcher,
      { enableHighAccuracy: true },
    );

    setWatchCode(newWatchCode);

    return () => {
      navigator.geolocation.clearWatch(watchCode);
    };
  }, []);

  const handleClickCreatePin = useCallback(() => {
    const newPin = {
      point: userLocation,
      content: "",
      thumbnailUrl: null,
    };

    setLogData((prevData) => ({
      ...prevData,
      pins: [...prevData.pins, newPin],
    }));
  }, [userLocation]);

  return <LogRecordRecordingView handleClickCreatePin={handleClickCreatePin} />;
};

export default LogRecordRecordingController;
