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
import { MasilRecordRequest } from "@/types/Request";
import useLogRecordRecordingModel from "./LogRecordRecording.model";

interface LogRecordRecordingControllerProps {
  logData: MasilRecordRequest;
  watchCode: number;
  setLogData: SetLogData;
  setPageStep: SetPageStep;
  setWatchCode: SetWatchCode;
  onErrorWatcher: OnErrorWatcher;
  updateUserLocation: UpdateUserLocation;
}

const LogRecordRecordingController = ({
  logData,
  setLogData,
  watchCode,
  setWatchCode,
  setPageStep,
  onErrorWatcher,
  updateUserLocation,
}: LogRecordRecordingControllerProps) => {
  const { timerId, setTimerId } = useLogRecordRecordingModel();
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

  const increaseTime = useRef(
    throttle(() => {
      setLogData((prevData) => ({ ...prevData, totalTime: prevData.totalTime + 1 }));
    }, 1000),
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

    const newTimerId = setInterval(increaseTime, 1000);

    setTimerId(newTimerId);

    return () => {
      navigator.geolocation.clearWatch(watchCode);

      if (timerId) {
        clearInterval(timerId);
      }
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

  return (
    <LogRecordRecordingView
      logData={logData}
      handleClickCreatePin={handleClickCreatePin}
    />
  );
};

export default LogRecordRecordingController;
