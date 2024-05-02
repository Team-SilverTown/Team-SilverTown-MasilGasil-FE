"use client";

import { Button } from "@/components";
import MasilMap from "@/components/MasilMap/MasilMap";
import { Pin } from "@/components/icons";
import Center from "@/components/icons/Center";
import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";

import useLogRecordController from "./LogRecord.controller";
import { LogRecordEdit, LogRecordRecording, LogRecordStandby } from "./components";

import { AnimatePresence, motion } from "framer-motion";
import { twJoin } from "tailwind-merge";

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
    <section className="relative flex h-full w-full flex-col items-center justify-start bg-background_color">
      <TopNavigator
        leftChildren={<GoBackButton onGoBackHandler={handleClickFallback} />}
        containerStyle={{ backgroundColor: "transparent" }}
      />

      <motion.article
        className="h-full w-full"
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
      </motion.article>

      <AnimatePresence
        onExitComplete={() => {
          setIsActiveExitAnimation(false);
        }}
      >
        {!isActiveExitAnimation && (
          <>
            <motion.div
              className={twJoin(
                " flex w-full flex-col items-center justify-center",
                pageStep === "LOG_RECORD_EDITING" && "relative h-[50%]",
                pageStep !== "LOG_RECORD_EDITING" && "absolute bottom-0",
              )}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
            >
              <div
                className={twJoin(
                  "mb-[1.6rem] flex w-full justify-end gap-[1.6rem] opacity-90",
                  pageStep === "LOG_RECORD_STANDBY" && "min-w-[24rem] max-w-[36rem] pr-[1.6rem]",
                  pageStep === "LOG_RECORD_RECORDING" && "min-w-[24rem] max-w-[36rem]",
                  pageStep === "LOG_RECORD_EDITING" && "absolute top-[-7.2rem] pr-[1.6rem]",
                )}
              >
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
              </div>

              {pageStep === "LOG_RECORD_STANDBY" && <LogRecordStandby />}

              {pageStep === "LOG_RECORD_RECORDING" && <LogRecordRecording />}
            </motion.div>
            {pageStep === "LOG_RECORD_EDITING" && <LogRecordEdit />}
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LogRecordView;
