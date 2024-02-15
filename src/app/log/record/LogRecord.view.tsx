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
}: LogRecordViewProps) => {
  return (
    <S.LogRecordLayout>
      {/* 테스트 이후 제거 예정 */}
      <S.LogTestActionList>
        <S.LogTestButton onClick={() => setPageStep("LOG_RECORD_STANDBY")}>Standby</S.LogTestButton>
        <S.LogTestButton onClick={() => setPageStep("LOG_RECORD_RECORDING")}>
          Recording
        </S.LogTestButton>
        <S.LogTestButton onClick={() => setPageStep("LOG_RECORD_EDITING")}>Edit</S.LogTestButton>
      </S.LogTestActionList>

      <MasilMap
        center={userLocation}
        path={logData.path}
        pins={logData.pins}
        draggable={pageStep !== "LOG_RECORD_EDITING"}
      />

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
