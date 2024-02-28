import * as S from "./LogRecord.styles";

import { LogPageStep, SetIsMapResizing } from "./LogRecord.types";
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
  pageStep: LogPageStep;
  logData: MasilRecordRequest;
  isActiveExitAni: boolean;
  isMapResizing: boolean;

  userLocation: GeoPosition;
  currentPinIndex: number;

  setPageStep: SetPageStep;
  setLogData: SetLogData;

  handleClickFallback: () => void;
  onClickPin: OnClickPin;
  onCreatePathLine: OnCreatePathLine;
  setCurrentPinIndex: (pinIndex: number) => void;
  handleOffIsOutCenter: () => void;
  handleClickCreatePin: () => void;

  setIsActiveExitAni: SetIsActiveExitAni;
  setIsMapResizing: SetIsMapResizing;
}

const LogRecordView = ({
  pageStep,
  logData,
  userLocation,
  currentPinIndex,

  isActiveExitAni,
  setIsActiveExitAni,

  isMapResizing,
  setIsMapResizing,

  setLogData,
  setPageStep,

  handleClickFallback,
  onClickPin,
  onCreatePathLine,
  setCurrentPinIndex,
  handleOffIsOutCenter,
  handleClickCreatePin,
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
        animate={pageStep === "LOG_RECORD_EDITING" && !isActiveExitAni ? "editing" : "initial"}
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
          setIsActiveExitAni(false);
        }}
      >
        {!isActiveExitAni && (
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

            {pageStep === "LOG_RECORD_EDITING" && <LogRecordEdit />}
          </S.LogRecordStepLayout>
        )}
      </AnimatePresence>
    </S.LogRecordLayout>
  );
};

export default LogRecordView;
