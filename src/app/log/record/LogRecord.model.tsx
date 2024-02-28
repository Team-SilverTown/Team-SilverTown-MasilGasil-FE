import { useEffect, useState } from "react";
import LogRecordView from "./LogRecord.view";
import { LOG_RECORD_MESSAGE } from "./LogRecord.constants";
import useLogRecordContext from "./context/LogRecordContext";
import { useUI } from "@/components/uiContext/UiContext";
import useMapCenterStore from "@/components/MasilMap/store/useMapCenterStore";
import useUserLocationStore from "@/stores/useUserLocationStore";
import { useRouter } from "next/navigation";

const LogRecordModel = () => {
  const [isMapResizing, setIsMapResizing] = useState(false);
  const {
    logData,
    pageStep,
    setPageStep,
    currentPinIndex,
    setCurrentPinIndex,

    isActiveExitAnimation,
    setIsActiveExitAnimation,

    updateDistance,
    createPin,
    clickPin,

    initData,
  } = useLogRecordContext();
  const { userLocation } = useUserLocationStore();

  const { closeModal, setModalView, openModal } = useUI();
  const { setIsOutCenter } = useMapCenterStore();
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

export default LogRecordModel;