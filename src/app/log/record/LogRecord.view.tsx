import * as S from "./LogRecord.styles";

import { LogPageStep, SetIsActiveExitAnimation, SetIsMapResizing } from "./LogRecord.types";
import { LogRecordEdit, LogRecordRecording, LogRecordStandby } from "./components";
import { MasilRecordRequest } from "@/types/Request";
import MasilMap from "@/components/MasilMap/MasilMap";
import { Button } from "@/components";
import { Pin } from "@/components/icons";
import { OnClickPin, OnCreatePathLine } from "@/components/MasilMap/MasilMap.types";
import { GeoPosition } from "@/types/OriginDataType";
import Center from "@/components/icons/Center";
import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";
import { AnimatePresence } from "framer-motion";

interface LogRecordViewProps {
  logData: MasilRecordRequest;
  pageStep: LogPageStep;
  userLocation: GeoPosition;
  currentPinIndex: number;

  isActiveExitAnimation: boolean;
  setIsActiveExitAnimation: SetIsActiveExitAnimation;

  isMapResizing: boolean;
  setIsMapResizing: SetIsMapResizing;

  onCreatePathLine: OnCreatePathLine;
  onClickPin: OnClickPin;
  handleClickFallback: () => void;

  handleClickCreatePin: () => void;
  handleOffIsOutCenter: () => void;
}

const LogRecordView = ({
  pageStep,
  logData,
  userLocation,
  currentPinIndex,

  isActiveExitAnimation,
  setIsActiveExitAnimation,

  isMapResizing,
  setIsMapResizing,

  onCreatePathLine,
  onClickPin,
  handleClickCreatePin,

  handleClickFallback,
  handleOffIsOutCenter,
}: LogRecordViewProps) => {
  const mapAnimation = {
    initial: { height: "100%" },
    editing: { height: "50%" },
  };

  return (
    <S.LogRecordLayout>
      <TopNavigator leftChildren={<GoBackButton onGoBackHandler={handleClickFallback} />} />

      <S.LogRecordMapContainer
        initial="initial"
        animate={
          pageStep === "LOG_RECORD_EDITING" && !isActiveExitAnimation ? "editing" : "initial"
        }
        variants={mapAnimation}
        onAnimationComplete={() => setIsMapResizing(true)}
      >
        <MasilMap
          center={userLocation}
          path={logData.path}
          pins={logData.pins}
          onCreatePathLine={onCreatePathLine}
          isShowCenterMarker={pageStep !== "LOG_RECORD_EDITING"}
          onClickPin={onClickPin}
          selectedPinIndex={currentPinIndex}
          isResizing={isMapResizing}
        />
      </S.LogRecordMapContainer>

      <AnimatePresence
        onExitComplete={() => {
          setIsActiveExitAnimation(false);
        }}
      >
        {!isActiveExitAnimation && (
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
                  onClickHandler={handleClickCreatePin}
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
        )}
      </AnimatePresence>

      <AnimatePresence
        onExitComplete={() => {
          setIsActiveExitAnimation(false);
        }}
      >
        {!isActiveExitAnimation && pageStep === "LOG_RECORD_EDITING" && <LogRecordEdit />}
      </AnimatePresence>
    </S.LogRecordLayout>
  );
};

export default LogRecordView;
