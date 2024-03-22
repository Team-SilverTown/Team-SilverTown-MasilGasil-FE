"use client";

import { useEffect } from "react";
import { LOG_RECORD_MESSAGE } from "./LogRecord.constants";
import useLogRecordContext from "./context/LogRecordContext";
import { useUI } from "@/components/uiContext/UiContext";

import useUserLocationStore from "@/lib/stores/useUserLocationStore";
import { useRouter } from "next/navigation";
import useMasilMapStore from "@/components/MasilMap/store/useMasilMapStore";

const useLogRecordController = () => {
  const {
    logData,
    navigationData,
    pageStep,
    setPageStep,
    currentPinIndex,
    setCurrentPinIndex,

    isActiveExitAnimation,
    setIsActiveExitAnimation,

    updateDistance,
    handleCreatePin,
    handleClickPin,

    initData,
  } = useLogRecordContext();
  const { userLocation } = useUserLocationStore();

  const { closeModal, setModalView, openModal } = useUI();
  const { setIsOutCenter, setIsActiveMapResizing } = useMasilMapStore();
  const router = useRouter();

  useEffect(() => {
    closeModal();
  }, [pageStep]);

  const handleOffIsOutCenter = () => {
    setIsOutCenter(false);
  };

  const handleClickFallback = () => {
    setCurrentPinIndex(-1);

    if (pageStep === "LOG_RECORD_STANDBY") {
      router.back();
      return;
    }

    setModalView("CONFIRM_VIEW");
    openModal({
      onClickAccept: () => {
        setIsActiveExitAnimation(true);
        setPageStep("LOG_RECORD_STANDBY");
        initData();
        closeModal();
      },
      message: LOG_RECORD_MESSAGE.FALL_BACK.MESSAGE,
      warningMessage: LOG_RECORD_MESSAGE.FALL_BACK.WARNING_MESSAGE,
    });
  };

  const handleClickNavigationPin = (pinIndex: number) => {
    setModalView("PIN_DETAIL_MODAL_VIEW");
    openModal({
      pin: navigationData?.pins[pinIndex],
    });
  };

  return {
    logData,
    navigationData,
    pageStep,
    userLocation,
    currentPinIndex,
    isActiveExitAnimation,
    setIsActiveExitAnimation,
    setIsActiveMapResizing,
    updateDistance,
    handleClickPin,
    handleCreatePin,
    handleClickFallback,
    handleOffIsOutCenter,
    handleClickNavigationPin,
  };
};

export default useLogRecordController;
