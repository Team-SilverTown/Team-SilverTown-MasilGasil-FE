import { useEffect, useRef } from "react";
import LogRecordRecordingView from "./LogRecordRecording.view";
import {
  OnErrorWatcher,
  SetLogData,
  SetPageStep,
  SetWatchCode,
  UpdateUserLocation,
} from "../../LogRecord.types";
import { throttle } from "lodash";

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
  const updatePath = useRef(
    throttle(({ coords }: GeolocationPosition) => {
      console.log(coords);
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
      console.log("Recording Component cleanUp");
    };
  }, []);

  return <LogRecordRecordingView />;
};

export default LogRecordRecordingController;
