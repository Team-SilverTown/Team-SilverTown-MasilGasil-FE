"use client";

import useUserLocationStore from "@/stores/useUserLocationStore";
import useLogRecordModel from "./LogRecord.model";
import LogRecordView from "./LogRecord.view";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { DEFAULT_LOG_DATA, LOG_RECORD_MESSAGE } from "./LogRecord.constants";
import { useUI } from "@/components/uiContext/UiContext";
import useMapCenterStore from "@/components/MasilMap/store/useMapCenterStore";

import useLogRecordContext from "./context/LogRecordContext";

const LogRecordController = () => {
  const { openModal, setModalView, closeModal } = useUI();
  const { userLocation, setUserLocation } = useUserLocationStore();
  const { isMapResizing, setIsMapResizing } = useLogRecordModel();
  const { setIsOutCenter } = useMapCenterStore();
  const router = useRouter();

  const {
    pageStep,
    setPageStep,
    logData,
    setLogData,
    isActiveExitAnimation,
    setIsActiveExitAnimation,
    currentPinIndex,
    setCurrentPinIndex,

    createPin,
    clickPin,
    updateDistance,
  } = useLogRecordContext();

  // Stay
  useEffect(() => {
    closeModal();
  }, [pageStep]);

  // Util - Context
  /**
   * @summary watcher가 오류가 발생했을때 수행할 동작을 위한 함수입니다.
   * @param PERMISSION_DENIED 사용자가 위치 서비스를 동의 하지 않았는지를 파악할때 code와 비교하는 용도로 사용되어집니다.
   */
  const handleWatchError = ({ code, PERMISSION_DENIED }: GeolocationPositionError) => {
    setModalView("LOG_RECORD_ALERT_VIEW");

    if (code === PERMISSION_DENIED) {
      /*
      TODO
      추후 멘트 수정 
      */
      openModal({
        message: LOG_RECORD_MESSAGE.ERROR.WATCH_PERMISSION_DENIED,
      });
    }
    /*
    TODO
    추후 멘트 수정 
    */
    openModal({
      message: LOG_RECORD_MESSAGE.ERROR.WATCH_ERROR,
    });
  };

  // Util - GeoLocationUtils // Context

  const handleClickFallback = () => {
    setCurrentPinIndex(-1);

    if (pageStep === "LOG_RECORD_STANDBY") {
      router.back();
      return;
    }

    setModalView("LOG_RECORD_CONFIRM_VIEW");
    openModal({
      onClickAccept: () => {
        setPageStep("LOG_RECORD_STANDBY");

        // TODO: 맵 Center 렌더링 필요
        setLogData(DEFAULT_LOG_DATA);
        closeModal();
      },
      message: LOG_RECORD_MESSAGE.FALL_BACK.MESSAGE,
      warningMessage: LOG_RECORD_MESSAGE.FALL_BACK.WARNING_MESSAGE,
    });
  };

  const handleOffIsOutCenter = () => {
    setIsOutCenter(false);
  };

  return (
    <LogRecordView
      pageStep={pageStep}
      logData={logData}
      userLocation={userLocation}
      setPageStep={setPageStep}
      setLogData={setLogData}
      handleClickFallback={handleClickFallback}
      currentPinIndex={currentPinIndex}
      setCurrentPinIndex={setCurrentPinIndex}
      handleOffIsOutCenter={handleOffIsOutCenter}
      isActiveExitAni={isActiveExitAnimation}
      setIsActiveExitAni={setIsActiveExitAnimation}
      isMapResizing={isMapResizing}
      setIsMapResizing={setIsMapResizing}
      onClickPin={clickPin}
      handleClickCreatePin={createPin}
      onCreatePathLine={updateDistance}
    />
  );
};

export default LogRecordController;
