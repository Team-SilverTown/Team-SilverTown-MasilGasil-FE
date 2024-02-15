"use client";

import useLogRecordModel from "./LogRecord.model";
import LogRecordView from "./LogRecord.view";

const LogRecordController = () => {
  const { pageStep, setPageStep, logData, setLogData, watchCode, setWatchCode } =
    useLogRecordModel();

  return (
    <LogRecordView
      pageStep={pageStep}
      logData={logData}
      watchCode={watchCode}
      onChangeStep={setPageStep}
      setWatchCode={setWatchCode}
    />
  );
};

export default LogRecordController;
