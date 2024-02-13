import { GeoJSONPoint } from "@/types/OriginDataType/GeoJSON";
import { LogPageStep } from "./LogRecord.types";
import { LogRecordEdit, LogRecordRecording, LogRecordStandby } from "./components";

interface LogRecordViewProps {
  pageStep: LogPageStep;
  watchCode: number;
  center: GeoJSONPoint;

  onChangeStep: (step: LogPageStep) => void;
  onChangeCenter: (coords: { lat: number; lng: number }) => void;
  setWatchCode: (code: number) => void;
}

const LogRecordView = ({
  pageStep,
  watchCode,
  onChangeStep,
  onChangeCenter,
  setWatchCode,
}: LogRecordViewProps) => {
  return (
    <>
      <ul>
        <li>
          <button onClick={() => onChangeStep("LOG_RECORD_STANDBY")}> Standby</button>
        </li>
        <li>
          <button onClick={() => onChangeStep("LOG_RECORD_RECORDING")}> Recording</button>
        </li>
        <li>
          <button onClick={() => onChangeStep("LOG_RECORD_EDITING")}> Edit</button>
        </li>
      </ul>

      {pageStep === "LOG_RECORD_STANDBY" && (
        <LogRecordStandby
          watchCode={watchCode}
          onChangeCenter={onChangeCenter}
          setWatchCode={setWatchCode}
        />
      )}

      {pageStep === "LOG_RECORD_RECORDING" && <LogRecordRecording />}

      {pageStep === "LOG_RECORD_EDITING" && <LogRecordEdit />}
    </>
  );
};

export default LogRecordView;
