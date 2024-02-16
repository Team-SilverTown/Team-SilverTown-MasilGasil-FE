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
import { GeoJSONPoint } from "@/types/OriginDataType";
import { useEffect } from "react";
import { Button } from "@/components";
import { ChevronLeft } from "@/components/icons";
import { OnCreatePathLine } from "@/components/MasilMap/MasilMap.types";

interface LogRecordViewProps {
  pageStep: LogPageStep;
  logData: MasilRecordRequest;
  watchCode: number;
  userLocation: GeoJSONPoint;

  setPageStep: SetPageStep;
  setWatchCode: SetWatchCode;
  setLogData: SetLogData;
  onErrorWatcher: OnErrorWatcher;
  updateUserLocation: UpdateUserLocation;
  handleClickFallback: () => void;
  onCreatePathLine: OnCreatePathLine;
}

const LogRecordView = ({
  pageStep,
  logData,
  watchCode,
  userLocation,
  setLogData,
  setPageStep,
  setWatchCode,
  onErrorWatcher,
  updateUserLocation,
  handleClickFallback,
  onCreatePathLine,
}: LogRecordViewProps) => {
  useEffect(() => {
    console.log(logData);
  }, [logData]);
  return (
    <S.LogRecordLayout>
      <MasilMap
        center={userLocation}
        path={logData.path}
        pins={logData.pins}
        draggable={pageStep !== "LOG_RECORD_EDITING"}
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

      {pageStep === "LOG_RECORD_EDITING" && <LogRecordEdit />}
    </S.LogRecordLayout>
  );
};

export default LogRecordView;
