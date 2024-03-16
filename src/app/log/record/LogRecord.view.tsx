"use client";

import * as S from "./LogRecord.styles";

import { LogRecordEdit, LogRecordRecording, LogRecordStandby } from "./components";
import MasilMap from "@/components/MasilMap/MasilMap";
import { Button } from "@/components";
import { Pin } from "@/components/icons";
import Center from "@/components/icons/Center";
import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";
import { AnimatePresence } from "framer-motion";
import useLogRecordController from "./LogRecord.controller";

const LogRecordView = () => {
  const {
    pageStep,
    logData,
    navigationData,
    userLocation,
    currentPinIndex,
    isActiveExitAnimation,
    setIsActiveExitAnimation,
    setIsActiveMapResizing,

    updateDistance,

    handleCreatePin,
    handleClickPin,

    handleClickFallback,
    handleOffIsOutCenter,
    handleClickNavigationPin,
  } = useLogRecordController();
  const mapAnimation = {
    initial: { height: "100%" },
    editing: { height: "45%" },
  };

  return (
    <S.LogRecordLayout>
      <TopNavigator
        leftChildren={<GoBackButton onGoBackHandler={handleClickFallback} />}
        containerStyle={{ backgroundColor: "transparent" }}
      />

      <S.LogRecordMapContainer
        initial="initial"
        animate={
          pageStep === "LOG_RECORD_EDITING" && !isActiveExitAnimation ? "editing" : "initial"
        }
        variants={mapAnimation}
        onAnimationComplete={() => setIsActiveMapResizing(true)}
      >
        <MasilMap
          center={userLocation}
          path={logData.path}
          pins={logData.pins}
          onCreatePathLine={updateDistance}
          isShowCenterMarker={pageStep !== "LOG_RECORD_EDITING"}
          onClickPin={handleClickPin}
          selectedPinIndex={currentPinIndex}
          navigationPath={navigationData?.path}
          navigationPins={navigationData?.pins}
          onClickNavigationPin={handleClickNavigationPin}
        />
      </S.LogRecordMapContainer>

      <AnimatePresence
        onExitComplete={() => {
          setIsActiveExitAnimation(false);
        }}
      >
        {!isActiveExitAnimation && (
          <>
            <S.LogRecordStepLayout
              $pageStep={pageStep}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
            >
              <S.LogRecordActions $pageStep={pageStep}>
                {pageStep === "LOG_RECORD_RECORDING" && (
                  <Button
                    variant="neumorp"
                    onClickHandler={handleCreatePin}
                  >
                    <Pin />
                  </Button>
                )}

                <Button
                  variant="neumorp"
                  onClickHandler={handleOffIsOutCenter}
                >
                  <Center />
                </Button>
              </S.LogRecordActions>

              {pageStep === "LOG_RECORD_STANDBY" && <LogRecordStandby />}

              {pageStep === "LOG_RECORD_RECORDING" && <LogRecordRecording />}
            </S.LogRecordStepLayout>
            {pageStep === "LOG_RECORD_EDITING" && <LogRecordEdit />}
          </>
        )}
      </AnimatePresence>
    </S.LogRecordLayout>
  );
};

export default LogRecordView;
