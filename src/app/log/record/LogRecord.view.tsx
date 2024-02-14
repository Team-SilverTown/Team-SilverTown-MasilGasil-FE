import * as S from "./LogRecord.styles";

import { GeoJSONPoint, KakaoPosition } from "@/types/OriginDataType";
import { LogPageStep } from "./LogRecord.types";
import { LogRecordEdit, LogRecordRecording, LogRecordStandby } from "./components";
import { MasilRecordRequest } from "@/types/Request";

interface LogRecordViewProps {
  pageStep: LogPageStep;
  center: GeoJSONPoint;
  logData: MasilRecordRequest;
  watchCode: number;

  onChangeStep: (step: LogPageStep) => void;
  onChangeCenter: (coords: KakaoPosition) => void;
  setWatchCode: (code: number) => void;
}

const LogRecordView = ({
  pageStep,
  center,
  logData,
  watchCode,
  onChangeStep,
  onChangeCenter,
  setWatchCode,
}: LogRecordViewProps) => {
  return (
    <S.LogRecordLayout>
      {/* 테스트 이후 제거 예정 */}
      <S.LogTestActionList>
        <S.LogTestButton onClick={() => onChangeStep("LOG_RECORD_STANDBY")}>
          Standby
        </S.LogTestButton>
        <S.LogTestButton onClick={() => onChangeStep("LOG_RECORD_RECORDING")}>
          Recording
        </S.LogTestButton>
        <S.LogTestButton onClick={() => onChangeStep("LOG_RECORD_EDITING")}>Edit</S.LogTestButton>
      </S.LogTestActionList>

      {pageStep === "LOG_RECORD_STANDBY" && (
        <LogRecordStandby
          center={center}
          logData={logData}
          watchCode={watchCode}
          onChangeCenter={onChangeCenter}
          setWatchCode={setWatchCode}
        />
      )}

      {pageStep === "LOG_RECORD_RECORDING" && <LogRecordRecording />}

      {pageStep === "LOG_RECORD_EDITING" && <LogRecordEdit />}
    </S.LogRecordLayout>
  );
};

export default LogRecordView;
