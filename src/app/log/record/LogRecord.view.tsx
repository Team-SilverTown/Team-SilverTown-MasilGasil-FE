import * as S from "./LogRecord.styles";

import {
  OnErrorWatcher,
  LogPageStep,
  UpdateUserLocation,
  SetPageStep,
  SetWatchCode,
  SetLogData,
} from "./LogRecord.types";
import { LogRecordEdit, LogRecordRecording, LogRecordStandby } from "./components";
import { MasilRecordRequest } from "@/types/Request";
import MasilMap from "@/components/MasilMap/MasilMap";
import { Button } from "@/components";
import { ChevronLeft } from "@/components/icons";
import { OnCreatePathLine } from "@/components/MasilMap/MasilMap.types";
import { GeoPosition } from "@/types/OriginDataType";

interface LogRecordViewProps {
  pageStep: LogPageStep;
  logData: MasilRecordRequest;
  watchCode: number;
  userLocation: GeoPosition;
  currentPinIndex: number;

  setPageStep: SetPageStep;
  setWatchCode: SetWatchCode;
  setLogData: SetLogData;
  onErrorWatcher: OnErrorWatcher;
  updateUserLocation: UpdateUserLocation;
  handleClickFallback: () => void;
  onCreatePathLine: OnCreatePathLine;
  setCurrentPinIndex: (pinIndex: number) => void;
}

const LogRecordView = ({
  pageStep,
  logData,
  watchCode,
  userLocation,
  currentPinIndex,
  setLogData,
  setPageStep,
  setWatchCode,
  onErrorWatcher,
  updateUserLocation,
  handleClickFallback,
  onCreatePathLine,
  setCurrentPinIndex,
}: LogRecordViewProps) => {
  return (
    <S.LogRecordLayout>
      <MasilMap
        center={userLocation}
        path={logData.path}
        pins={logData.pins}
        draggable={pageStep === "LOG_RECORD_EDITING"}
        onCreatePathLine={onCreatePathLine}
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
          watchCode={watchCode}
          setLogData={setLogData}
          setPageStep={setPageStep}
          setWatchCode={setWatchCode}
          onErrorWatcher={onErrorWatcher}
          updateUserLocation={updateUserLocation}
        />
      )}

      {pageStep === "LOG_RECORD_RECORDING" && (
        <LogRecordRecording
          logData={logData}
          setLogData={setLogData}
          watchCode={watchCode}
          setWatchCode={setWatchCode}
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
        />
      )}
    </S.LogRecordLayout>
  );
};

export default LogRecordView;
