import { useEffect } from "react";
import LogRecordRecordingView from "./LogRecordRecording.view";
import { OnErrorWatcher, UpdateUserLocation } from "../../LogRecord.types";

import { useUI } from "@/components/uiContext/UiContext";

import { LOG_RECORD_MESSAGE } from "../../LogRecord.constants";
import useLogRecordContext from "../../context/LogRecordContext";

interface LogRecordRecordingControllerProps {
  onErrorWatcher: OnErrorWatcher;
  updateUserLocation: UpdateUserLocation;
}

const LogRecordRecordingController = ({
  onErrorWatcher,
  updateUserLocation,
}: LogRecordRecordingControllerProps) => {
  const { openModal, setModalView, closeModal } = useUI();
  const { increaseTimer, updatePath, logData, setPageStep, setIsActiveExitAnimation } =
    useLogRecordContext();

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

  /**
   * @summary 기록을 완료할때 Modal을 제공합니다.
   */
  const handleClickCompleteRecord = () => {
    setModalView("LOG_RECORD_CONFIRM_VIEW");
    openModal({
      onClickAccept: () => {
        setIsActiveExitAnimation(true);
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
