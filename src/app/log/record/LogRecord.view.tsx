import * as S from "./LogRecord.styles";

import { GeoJSONPoint, KakaoPosition } from "@/types/OriginDataType";
import { LogPageStep } from "./LogRecord.types";
import { LogRecordEdit, LogRecordRecording, LogRecordStandby } from "./components";

interface LogRecordViewProps {
  pageStep: LogPageStep;
  watchCode: number;
  center: GeoJSONPoint;

  onChangeStep: (step: LogPageStep) => void;
  onChangeCenter: (coords: KakaoPosition) => void;
  setWatchCode: (code: number) => void;
}

const LogRecordView = ({
  pageStep,
  watchCode,
  center,
  onChangeStep,
  onChangeCenter,
  setWatchCode,
}: LogRecordViewProps) => {
  console.log(center);

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
