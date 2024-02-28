import { useState } from "react";
import { LogPageStep } from "./LogRecord.types";
import { MasilRecordRequest } from "@/types/Request";
import { DEFAULT_LOG_DATA } from "./LogRecord.constants";

const useLogRecordModel = () => {
  // Context
  const [pageStep, setPageStep] = useState<LogPageStep>("LOG_RECORD_STANDBY");
  // Context
  const [logData, setLogData] = useState<MasilRecordRequest>(DEFAULT_LOG_DATA);
  // Context
  const [currentPinIndex, setCurrentPinIndex] = useState(-1);
  // Context
  const [isActiveExitAni, setIsActiveExitAni] = useState(false);

  // State
  const [isMapResizing, setIsMapResizing] = useState(false);

  return {
    pageStep,
    setPageStep,
    logData,
    setLogData,
    currentPinIndex,
    setCurrentPinIndex,

    isActiveExitAni,
    setIsActiveExitAni,
    isMapResizing,
    setIsMapResizing,
  };
};

export default useLogRecordModel;
