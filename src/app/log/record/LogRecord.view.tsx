import * as S from "./LogRecord.styles";

import { OnErrorWatcher, LogPageStep, UpdateUserLocation } from "./LogRecord.types";
import { LogRecordEdit, LogRecordRecording, LogRecordStandby } from "./components";
import { MasilRecordRequest } from "@/types/Request";
import MasilMap from "@/components/MasilMap/MasilMap";
import { GeoJSONPoint } from "@/types/OriginDataType";

interface LogRecordViewProps {
  pageStep: LogPageStep;
  logData: MasilRecordRequest;
  watchCode: number;
  userLocation: GeoJSONPoint;

  setChangeStep: (step: LogPageStep) => void;
  setWatchCode: (code: number) => void;
  setLogData: (log: MasilRecordRequest) => void;
  onErrorWatcher: OnErrorWatcher;
  updateUserLocation: UpdateUserLocation;
}

const LogRecordView = ({
  pageStep,
  logData,
  watchCode,
  userLocation,
  setChangeStep,
  setWatchCode,
  onErrorWatcher,
  updateUserLocation,
}: LogRecordViewProps) => {
  return (
    <S.LogRecordLayout>
      {/* 테스트 이후 제거 예정 */}
      <S.LogTestActionList>
        <S.LogTestButton onClick={() => setChangeStep("LOG_RECORD_STANDBY")}>
          Standby
        </S.LogTestButton>
        <S.LogTestButton onClick={() => setChangeStep("LOG_RECORD_RECORDING")}>
          Recording
        </S.LogTestButton>
        <S.LogTestButton onClick={() => setChangeStep("LOG_RECORD_EDITING")}>Edit</S.LogTestButton>
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
          setChangeStep={setChangeStep}
          setWatchCode={setWatchCode}
          onErrorWatcher={onErrorWatcher}
          updateUserLocation={updateUserLocation}
        />
      )}

      {pageStep === "LOG_RECORD_RECORDING" && <LogRecordRecording />}

      {pageStep === "LOG_RECORD_EDITING" && <LogRecordEdit />}
    </S.LogRecordLayout>
  );
};

export default LogRecordView;
