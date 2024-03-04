import { useUI } from "@/components/uiContext/UiContext";
import useUserLocationStore from "@/stores/useUserLocationStore";
import { throttle } from "lodash";
import { useRef } from "react";
import { LOG_RECORD_MESSAGE } from "../LogRecord.constants";
import { useRouter } from "next/navigation";

const useGeoLocationUtils = () => {
  const { setUserLocation } = useUserLocationStore();
  const { setModalView, openModal } = useUI();
  const router = useRouter();

  /**
   * @func onErrorWatch
   *
   * @param code 에러가 발생한 코드를 확인할 수 있습니다.
   * @param PERMISSION_DENIED 사용자가 위치 서비스를 동의 하지 않았는지를 파악할때 code와 비교하는 용도로 사용되어집니다.
   *
   * @brief watcher가 오류가 발생했을때 수행할 동작을 위한 함수입니다.
   */
  const onErrorWatch = ({ code, PERMISSION_DENIED }: GeolocationPositionError) => {
    setModalView("LOG_RECORD_ALERT_VIEW");

    if (code === PERMISSION_DENIED) {
      openModal({
        message: LOG_RECORD_MESSAGE.ERROR.WATCH_PERMISSION_DENIED,
      });
      router.back();
      return;
    }

    openModal({
      message: LOG_RECORD_MESSAGE.ERROR.WATCH_ERROR,
    });
    router.back();
    return;
  };

  /**
   * @func updateUserLocation
   * @brief Watcher 가 동작한 후 정상적으로 위치를 가져왔을대 실행되는 함수입니다.
   *
   * ( throttle을 이용해 setter를 갱신시키기 위해선 useRef를 사용해야합니다. )
   */
  const updateUserLocation = useRef(
    throttle(({ coords }: GeolocationPosition) => {
      const { latitude, longitude } = coords;
      setUserLocation({ lat: latitude, lng: longitude });
    }, 200),
  ).current;

  return {
    updateUserLocation,
    onErrorWatch,
  };
};

export default useGeoLocationUtils;
