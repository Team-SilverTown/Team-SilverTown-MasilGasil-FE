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
import { ChevronLeft } from "@/components/icons";
import { OnClickPin, OnCreatePathLine } from "@/components/MasilMap/MasilMap.types";
import { GeoPosition } from "@/types/OriginDataType";

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
}: LogRecordViewProps) => {
  return (
    <S.LogRecordLayout>
      <MasilMap
        center={userLocation}
        path={logData.path}
        pins={logData.pins}
        onCreatePathLine={onCreatePathLine}
        isShowCenterMarker={pageStep !== "LOG_RECORD_EDITING"}
        onClickPin={onClickPin}
        selectedPinIndex={currentPinIndex}
      />

      <S.LogRecordTop>
        <Button
          variant="naked"
          onClickHandler={handleClickFallback}
        >
          <ChevronLeft
            strokeWidth={3}
            width={32}
            height={32}
          />
        </Button>
      </S.LogRecordTop>

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
    </S.LogRecordLayout>
  );
};

export default LogRecordView;
