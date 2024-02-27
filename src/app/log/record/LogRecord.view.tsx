import * as S from "./LogRecord.styles";

import {
  OnErrorWatcher,
  LogPageStep,
  UpdateUserLocation,
  SetPageStep,
  SetLogData,
  SetIsActiveExitAni,
} from "./LogRecord.types";
import { LogRecordEdit, LogRecordRecording, LogRecordStandby } from "./components";
import { MasilRecordRequest } from "@/types/Request";
import MasilMap from "@/components/MasilMap/MasilMap";
import { Button } from "@/components";
import { Pin } from "@/components/icons";
import { OnClickPin, OnCreatePathLine } from "@/components/MasilMap/MasilMap.types";
import { GeoPosition } from "@/types/OriginDataType";
import Center from "@/components/icons/Center";
import { TopNavigator } from "@/components/navigators/TopNavagtor";
import { GoBackButton } from "@/components/navigators/TopNavagtor/components";

import { AnimatePresence } from "framer-motion";

interface LogRecordViewProps {
  pageStep: LogPageStep;
  logData: MasilRecordRequest;
  isActiveExitAni: boolean;

  userLocation: GeoPosition;
  currentPinIndex: number;

  setPageStep: SetPageStep;
  setLogData: SetLogData;
  onErrorWatcher: OnErrorWatcher;
  updateUserLocation: UpdateUserLocation;
  handleClickFallback: () => void;
  onClickPin: OnClickPin;
  onCreatePathLine: OnCreatePathLine;
  setCurrentPinIndex: (pinIndex: number) => void;
  handleOffIsOutCenter: () => void;
  handleClickCreatePin: () => void;

  setIsActiveExitAni: SetIsActiveExitAni;
}

const LogRecordView = ({
  pageStep,
  logData,
  userLocation,
  currentPinIndex,

  isActiveExitAni,
  setIsActiveExitAni,

  setLogData,
  setPageStep,
  onErrorWatcher,
  updateUserLocation,
  handleClickFallback,
  onClickPin,
  onCreatePathLine,
  setCurrentPinIndex,
  handleOffIsOutCenter,
  handleClickCreatePin,
}: LogRecordViewProps) => {
  return (
    <S.LogRecordLayout>
      <TopNavigator leftChildren={<GoBackButton onGoBackHandler={handleClickFallback} />} />

      <MasilMap
        center={userLocation}
        path={logData.path}
        pins={logData.pins}
        onCreatePathLine={onCreatePathLine}
        isShowCenterMarker={pageStep !== "LOG_RECORD_EDITING"}
        onClickPin={onClickPin}
        selectedPinIndex={currentPinIndex}
        mapHeight={pageStep === "LOG_RECORD_EDITING" ? "50%" : "100%"}
      />

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

            {pageStep === "LOG_RECORD_STANDBY" && (
              <LogRecordStandby
                setLogData={setLogData}
                setPageStep={setPageStep}
                onErrorWatcher={onErrorWatcher}
                updateUserLocation={updateUserLocation}
                setIsActiveExitAni={setIsActiveExitAni}
              />
            )}

            {pageStep === "LOG_RECORD_RECORDING" && (
              <LogRecordRecording
                logData={logData}
                setLogData={setLogData}
                setPageStep={setPageStep}
                onErrorWatcher={onErrorWatcher}
                updateUserLocation={updateUserLocation}
                setIsActiveExitAni={setIsActiveExitAni}
              />
            )}

            {pageStep === "LOG_RECORD_EDITING" && (
              <LogRecordEdit
                logData={logData}
                currentPinIndex={currentPinIndex}
                setLogData={setLogData}
                setCurrentPinIndex={setCurrentPinIndex}
                onClickPin={onClickPin}
              />
            )}
          </S.LogRecordStepLayout>
        )}
      </AnimatePresence>
    </S.LogRecordLayout>
  );
};

export default LogRecordView;
