"use client";

import useLogRecordModel from "./LogRecord.model";
import LogRecordView from "./LogRecord.view";

const LogRecordController = () => {
  const {
    pageStep,
    setPageStep,
    center,
    setCentner,
    watchCode,
    setWatchCode,
    logData,
    setLogData,
  } = useLogRecordModel();

  console.log(pageStep, center, logData, watchCode);

  // 별도의 함수를 구현해 Switch 문으로 Step에 맞게 반환할 것인가?

  

  return <LogRecordView pageStep={pageStep} />;
};

export default LogRecordController;
