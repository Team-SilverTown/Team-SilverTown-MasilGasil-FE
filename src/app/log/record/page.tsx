"use client";

import LogRecordController from "./LogRecord.controller";
import { LogRecordContextProvider } from "./context/LogRecordContext";

const LogRecord = () => {
  return (
    <LogRecordContextProvider>
      <LogRecordController />
    </LogRecordContextProvider>
  );
};

export default LogRecord;
