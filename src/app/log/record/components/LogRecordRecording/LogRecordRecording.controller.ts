"use client";

import { useEffect } from "react";

import { useUI } from "@/components/uiContext/UiContext";

import useGeoLocationUtils from "../../../../../hooks/useGeoLocationUtils";
import { LOG_RECORD_MESSAGE } from "../../LogRecord.constants";
import useLogRecordContext from "../../context/LogRecordContext";

const useLogRecordRecordingController = () => {
  const { openModal, setModalView, closeModal } = useUI();
  const { onErrorWatch, updateUserLocation } = useGeoLocationUtils();
  const { increaseTimer, updatePath, logData, setPageStep, setIsActiveExitAnimation } =
    useLogRecordContext();

  useEffect(() => {
    const watchCode = navigator.geolocation.watchPosition(
      (geoPosition: GeolocationPosition) => {
        updateUserLocation(geoPosition);
        updatePath(geoPosition);
      },
      onErrorWatch,
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
    setModalView("CONFIRM_VIEW");
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

  return {
    logData,
    handleClickCompleteRecord,
  };
};

export default useLogRecordRecordingController;
