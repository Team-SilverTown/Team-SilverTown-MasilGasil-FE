import { useEffect, useRef } from "react";
import LogRecordStandbyView from "./LogRecordStandby.view";
import useUserLocationStore from "@/stores/useUserLocationStore";

import throttle from "lodash.throttle";

interface LogRecordStandbyControllerProps {
  watchCode: number;
  setWatchCode: (code: number) => void;
}

const LogRecordStandbyController = ({
  watchCode,
  setWatchCode,
}: LogRecordStandbyControllerProps) => {
  const { setUserLocation } = useUserLocationStore();

  /**
   * @summary Watcher 가 동작한 후 정상적으로 위치를 가져왔을대 실행되는 함수입니다.
   *
   * ( throttle을 이용해 setter를 갱신시키기 위해선 useRef를 사용해야합니다. )
   */
  const successWatch = useRef(
    throttle(({ coords }: GeolocationPosition) => {
      const { latitude, longitude } = coords;
      setUserLocation({ lat: latitude, lng: longitude });

      console.log("동작합니다");
    }, 200),
  ).current;

  useEffect(() => {
    const newWatchCode = navigator.geolocation.watchPosition(successWatch);
    setWatchCode(newWatchCode);

    return () => {
      navigator.geolocation.clearWatch(watchCode);
      console.log("Standby Component cleanUp");
    };
  }, []);

  return <LogRecordStandbyView onClick={() => {}} />;
};

export default LogRecordStandbyController;
