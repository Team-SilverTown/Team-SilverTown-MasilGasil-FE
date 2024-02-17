import { useCallback, useEffect, useRef } from "react";
import LogRecordRecordingView from "./LogRecordRecording.view";
import { OnErrorWatcher, SetLogData, SetPageStep, UpdateUserLocation } from "../../LogRecord.types";
import { throttle } from "lodash";
import useUserLocationStore from "@/stores/useUserLocationStore";
import { MasilRecordRequest } from "@/types/Request";
import { useUI } from "@/components/uiContext/UiContext";
import getTwoPointDistance from "../../func/getTwoPointDistance";

interface LogRecordRecordingControllerProps {
  logData: MasilRecordRequest;

  setLogData: SetLogData;
  setPageStep: SetPageStep;
  onErrorWatcher: OnErrorWatcher;
  updateUserLocation: UpdateUserLocation;
}

const LogRecordRecordingController = ({
  logData,
  setLogData,
  setPageStep,
  onErrorWatcher,
  updateUserLocation,
}: LogRecordRecordingControllerProps) => {
  const { userLocation } = useUserLocationStore();
  const { openModal, setModalView, closeModal } = useUI();

  /**
   * @summary watch의 success 콜백에 들어가는 함수로 경로 값을 추가시켜줍니다.
   *
   * 단, throttle을 통해 5초에 한번 실행.
   */
  const updatePath = useRef(
    throttle(({ coords }: GeolocationPosition) => {
      const { latitude, longitude } = coords;
      const newPoint = { lat: latitude, lng: longitude };

      setLogData((prevData) => {
        const { path } = prevData;
        const prevPosition = path[path.length - 1];

        if (prevPosition) {
          const pointDistance = getTwoPointDistance(newPoint, prevPosition);

          if (pointDistance < 10 || pointDistance > 200) {
            console.log("걸러짐");
            return prevData;
          }
        }

        return {
          ...prevData,
          path: [...prevData.path, newPoint],
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
    const watchCode = navigator.geolocation.watchPosition(
      (geoPosition: GeolocationPosition) => {
        updateUserLocation(geoPosition);
        updatePath(geoPosition);
      },
      onErrorWatcher,
      { enableHighAccuracy: true },
    );

    const timerId = setInterval(increaseTime, 1000);

    return () => {
      navigator.geolocation.clearWatch(watchCode);
      clearInterval(timerId);
    };
  }, []);

  const handleClickCreatePin = useCallback(() => {
    for (const { point: checkPin } of logData.pins) {
      const pointDistance = getTwoPointDistance(userLocation, checkPin);

      if (pointDistance < 10 /* M단위 */) {
        return;
      }
    }

    const newPin = {
      point: userLocation,
      content: "",
      thumbnailUrl: null,
    };

    setLogData((prevData) => ({
      ...prevData,
      pins: [...prevData.pins, newPin],
    }));
  }, [userLocation, logData]);

  const handleClickCompleteRecord = () => {
    setModalView("CONFIRM");
    openModal({
      onClickAccept: () => {
        setPageStep("LOG_RECORD_EDITING");
        closeModal();
      },
      message: "산책을 마무리 하실건가요?",
      warningMessage: "해당 페이지로 되돌아올 수 없습니다.",
      acceptButtonText: "완료",
    });
  };

  return (
    <LogRecordRecordingView
      logData={logData}
      handleClickCreatePin={handleClickCreatePin}
      handleClickCompleteRecord={handleClickCompleteRecord}
    />
  );
};

export default LogRecordRecordingController;
