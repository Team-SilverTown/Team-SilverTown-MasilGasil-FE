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

  return <LogRecordView />;
};

export default LogRecordController;
