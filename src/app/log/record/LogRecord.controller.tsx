"use client";

import useUserLocationStore from "@/stores/useUserLocationStore";
import useLogRecordModel from "./LogRecord.model";
import LogRecordView from "./LogRecord.view";
import { throttle } from "lodash";
import { useRef } from "react";

const LogRecordController = () => {
  const { setUserLocation } = useUserLocationStore();
  const { pageStep, setPageStep, logData, setLogData, watchCode, setWatchCode } =
    useLogRecordModel();

  /**
   * @summary watcher가 오류가 발생했을때 수행할 동작을 위한 함수입니다.
   * @param PERMISSION_DENIED 사용자가 위치 서비스를 동의 하지 않았는지를 파악할때 code와 비교하는 용도로 사용되어집니다.
   */
  const handleWatchError = ({ code, PERMISSION_DENIED }: GeolocationPositionError) => {
    if (code === PERMISSION_DENIED) {
      console.log("사용자가 위치 서비스에 동의하지 않았습니다 - 추후 에러 처리");
    }

    console.log("기술적인 문제 발생");
  };

  /**
   * @summary Watcher 가 동작한 후 정상적으로 위치를 가져왔을대 실행되는 함수입니다.
   *
   * ( throttle을 이용해 setter를 갱신시키기 위해선 useRef를 사용해야합니다. )
   */
  const updateUserLocation = useRef(
    throttle(({ coords }: GeolocationPosition) => {
      const { latitude, longitude } = coords;
      setUserLocation({ lat: latitude, lng: longitude });
    }, 200),
  ).current;

  return (
    <LogRecordView
      pageStep={pageStep}
      logData={logData}
      watchCode={watchCode}
      setChangeStep={setPageStep}
      setWatchCode={setWatchCode}
      setLogData={setLogData}
      onErrorWatcher={handleWatchError}
      updateUserLocation={updateUserLocation}
    />
  );
};

export default LogRecordController;
