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
  const { userLocation } = useUserLocationStore();
  const { isMapResizing, setIsMapResizing } = useLogRecordModel();
  const { setIsOutCenter } = useMapCenterStore();
  const router = useRouter();

  const {
    pageStep,
    setPageStep,
    logData,

    isActiveExitAnimation,
    setIsActiveExitAnimation,
    currentPinIndex,
    setCurrentPinIndex,

    initData,

    createPin,
    clickPin,
    updateDistance,
  } = useLogRecordContext();

  // Stay
  useEffect(() => {
    closeModal();
  }, [pageStep]);

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
        initData();
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
      logData={logData}
      pageStep={pageStep}
      userLocation={userLocation}
      currentPinIndex={currentPinIndex}
      isActiveExitAnimation={isActiveExitAnimation}
      setIsActiveExitAnimation={setIsActiveExitAnimation}
      isMapResizing={isMapResizing}
      setIsMapResizing={setIsMapResizing}
      onCreatePathLine={updateDistance}
      onClickPin={clickPin}
      handleClickCreatePin={createPin}
      handleClickFallback={handleClickFallback}
      handleOffIsOutCenter={handleOffIsOutCenter}
    />
  );
};

export default LogRecordController;
