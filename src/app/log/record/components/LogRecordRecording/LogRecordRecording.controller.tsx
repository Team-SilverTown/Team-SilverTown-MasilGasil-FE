import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import LogRecordRecordingView from "./LogRecordRecording.view";
import { OnErrorWatcher, SetLogData, SetPageStep, UpdateUserLocation } from "../../LogRecord.types";
import { throttle } from "lodash";
import { MasilRecordRequest } from "@/types/Request";
import { useUI } from "@/components/uiContext/UiContext";
import getTwoPointDistance from "../../utils/getTwoPointDistance";
import { LOG_RECORD_MESSAGE } from "../../LogRecord.constants";
import useLogRecordContext from "../../context/LogRecordContext";

interface LogRecordRecordingControllerProps {
  logData: MasilRecordRequest;

  setLogData: SetLogData;
  setPageStep: SetPageStep;
  onErrorWatcher: OnErrorWatcher;
  updateUserLocation: UpdateUserLocation;

  setIsActiveExitAni: Dispatch<SetStateAction<boolean>>;
}

const LogRecordRecordingController = ({
  logData,
  setLogData,
  setPageStep,
  onErrorWatcher,
  updateUserLocation,

  setIsActiveExitAni,
}: LogRecordRecordingControllerProps) => {
  const { openModal, setModalView, closeModal } = useUI();
  const { increaseTimer, updatePath } = useLogRecordContext();

  // Context Reducer
  /**
   * @summary watch의 success 콜백에 들어가는 함수로 경로 값을 추가시켜줍니다.
   *
   * 단, throttle을 통해 5초에 한번 실행.
   *
   * 실행된 후 이전 경로보다 일정거리 이하 혹은 이상인 경우 종료.
   */

  useEffect(() => {
    const watchCode = navigator.geolocation.watchPosition(
      (geoPosition: GeolocationPosition) => {
        updateUserLocation(geoPosition);
        updatePath(geoPosition);
      },
      onErrorWatcher,
      { enableHighAccuracy: true },
    );

    const timerId = setInterval(increaseTimer, 1000);

    return () => {
      navigator.geolocation.clearWatch(watchCode);
      clearInterval(timerId);
    };
  }, []);

  const handleClickCompleteRecord = () => {
    setModalView("LOG_RECORD_CONFIRM_VIEW");
    openModal({
      onClickAccept: () => {
        setIsActiveExitAni(true);
        setPageStep("LOG_RECORD_EDITING");
        closeModal();
      },
      message: LOG_RECORD_MESSAGE.COMPLETE_RECORD.MESSAGE,
      warningMessage: LOG_RECORD_MESSAGE.COMPLETE_RECORD.WARNING_MESSAGE,
      acceptButtonText: LOG_RECORD_MESSAGE.COMPLETE_RECORD.ACCEPT_BUTTON,
    });
  };

  return (
    <LogRecordRecordingView
      logData={logData}
      handleClickCompleteRecord={handleClickCompleteRecord}
    />
  );
};

export default LogRecordRecordingController;
