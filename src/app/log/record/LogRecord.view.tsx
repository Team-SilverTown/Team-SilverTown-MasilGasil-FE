import { LogPageStep } from "./LogRecord.types";
import { LogRecordEdit, LogRecordRecording, LogRecordStandby } from "./components";

interface LogRecordViewProps {
  pageStep: LogPageStep;
}

const LogRecordView = ({ pageStep }: LogRecordViewProps) => {
  return (
    <>
      {pageStep === "LOG_RECORD_STANDBY" && <LogRecordStandby />}

      {pageStep === "LOG_RECORD_RECORDING" && <LogRecordRecording />}

      {pageStep === "LOG_RECORD_EDITING" && <LogRecordEdit />}
    </>
  );
};

export default LogRecordView;
