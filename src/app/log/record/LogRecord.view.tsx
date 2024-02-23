import * as S from "./LogRecord.styles";

import {
  OnErrorWatcher,
  LogPageStep,
  UpdateUserLocation,
  SetPageStep,
  SetLogData,
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

interface LogRecordViewProps {
  pageStep: LogPageStep;
  logData: MasilRecordRequest;

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
}

const LogRecordView = ({
  pageStep,
  logData,
  userLocation,
  currentPinIndex,

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
      />

      <S.LogRecordStepLayout $pageStep={pageStep}>
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
          />
        )}

        {pageStep === "LOG_RECORD_RECORDING" && (
          <LogRecordRecording
            logData={logData}
            setLogData={setLogData}
            setPageStep={setPageStep}
            onErrorWatcher={onErrorWatcher}
            updateUserLocation={updateUserLocation}
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
    </S.LogRecordLayout>
  );
};

export default LogRecordView;
