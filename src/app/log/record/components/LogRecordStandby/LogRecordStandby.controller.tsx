import { useEffect } from "react";
import LogRecordStandbyView from "./LogRecordStandby.view";
import { KakaoFormatPosition } from "@/types/OriginDataType";

interface LogRecordStandbyControllerProps {
  watchCode: number;
  setWatchCode: (code: number) => void;
  onChangeCenter: (coords: KakaoFormatPosition) => void;
}

const LogRecordStandbyController = ({
  watchCode,
  setWatchCode,
  onChangeCenter,
}: LogRecordStandbyControllerProps) => {
  const successWatch = ({ coords }: GeolocationPosition) => {
    onChangeCenter({ lat: coords.latitude, lng: coords.longitude });
  };

  const errorWatch = () => {};

  /**
   * @summary 사용자의 클릭 이벤트에 반응해
   * 사용자의 위치를 지속적으로 감시해주는 navigator.geolocation.watchPosition을 활성화 시켜줍니다.
   *
   * watchPosition이 반환해주는 고유의 watchCode를 setWatchCode를 통해 보관합니다
   * ( 추후 cleanUp 작업에서 감시를 종료 할때 사용됩니다. - cleanUp 작업이 없다면 지속해서 감시동작 실행)
   */
  const handleClick = () => {
    const newWatchCode = navigator.geolocation.watchPosition(successWatch, errorWatch, {
      enableHighAccuracy: true,
    });

    setWatchCode(newWatchCode);
  };

  useEffect(() => {
    return () => {
      navigator.geolocation.clearWatch(watchCode);
      console.log("Standby Component cleanUp");
    };
  }, []);

  return <LogRecordStandbyView onClick={handleClick} />;
};

export default LogRecordStandbyController;
