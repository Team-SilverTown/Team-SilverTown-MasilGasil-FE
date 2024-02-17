import { useState } from "react";
import { LogPageStep } from "./LogRecord.types";
import { MasilRecordRequest } from "@/types/Request";
import { DEFAULT_LOG_DATA } from "./LogRecord.constants";

const useLogRecordModel = () => {
  // const [pageStep, setPageStep] = useState<LogPageStep>("LOG_RECORD_STANDBY");

  //* 컴포넌트 작업을 위한 임시 설정
  const [pageStep, setPageStep] = useState<LogPageStep>("LOG_RECORD_EDITING");
  const [logData, setLogData] = useState<MasilRecordRequest>(DEFAULT_LOG_DATA);
  const [watchCode, setWatchCode] = useState(0);

  return {
    pageStep,
    setPageStep,
    logData,
    setLogData,
    watchCode,
    setWatchCode,
  };
};

export default useLogRecordModel;
