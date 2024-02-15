import { useEffect, useRef } from "react";
import LogRecordRecordingView from "./LogRecordRecording.view";
import { LogPageStep, OnErrorWatcher, UpdateUserLocation } from "../../LogRecord.types";
import { throttle } from "lodash";
import { MasilRecordRequest } from "@/types/Request";

interface LogRecordRecordingControllerProps {
  watchCode: number;
  setLogData: (log: MasilRecordRequest) => void;
  setChangeStep: (step: LogPageStep) => void;
  setWatchCode: (code: number) => void;
  onErrorWatcher: OnErrorWatcher;
  updateUserLocation: UpdateUserLocation;
}

const LogRecordRecordingController = ({
  setLogData,
  watchCode,
  setWatchCode,
  setChangeStep,
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
