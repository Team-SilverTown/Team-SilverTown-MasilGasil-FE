import * as S from "./LogRecord.styles";

import { GeoJSONPoint, KakaoFormatPosition } from "@/types/OriginDataType";
import { LogPageStep } from "./LogRecord.types";
import { LogRecordEdit, LogRecordRecording, LogRecordStandby } from "./components";
import { MasilRecordRequest } from "@/types/Request";
import MasilMap from "@/components/MasilMap/MasilMap";
import useUserLocationStore from "@/stores/useUserLocationStore";

interface LogRecordViewProps {
  pageStep: LogPageStep;
  logData: MasilRecordRequest;
  watchCode: number;

  onChangeStep: (step: LogPageStep) => void;
  setWatchCode: (code: number) => void;
  setLogData: (log: MasilRecordRequest) => void;
}

const LogRecordView = ({
  pageStep,
  logData,
  watchCode,
  onChangeStep,
  setWatchCode,
}: LogRecordViewProps) => {
  const { userLocation } = useUserLocationStore();

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

      <MasilMap
        center={userLocation}
        path={logData.path}
        pins={logData.pins}
        draggable={pageStep !== "LOG_RECORD_EDITING"}
      />

      {pageStep === "LOG_RECORD_STANDBY" && (
        <LogRecordStandby
          watchCode={watchCode}
          setWatchCode={setWatchCode}
        />
      )}

      {pageStep === "LOG_RECORD_RECORDING" && <LogRecordRecording />}

      {pageStep === "LOG_RECORD_EDITING" && <LogRecordEdit />}
    </S.LogRecordLayout>
  );
};

export default LogRecordView;
