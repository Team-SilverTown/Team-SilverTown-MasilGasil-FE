import { useState } from "react";
import { LogPageStep } from "./LogRecord.types";
import { MasilRecordRequest } from "@/types/Request";
import { DEFAULT_LOG_DATA } from "./LogRecord.constants";

const useLogRecordModel = () => {
  const [pageStep, setPageStep] = useState<LogPageStep>("LOG_RECORD_STANDBY");
  const [logData, setLogData] = useState<MasilRecordRequest>(DEFAULT_LOG_DATA);
  const [currentPinIndex, setCurrentPinIndex] = useState(-1);

  return {
    pageStep,
    setPageStep,
    logData,
    setLogData,
    currentPinIndex,
    setCurrentPinIndex,
  };
};

export default useLogRecordModel;
