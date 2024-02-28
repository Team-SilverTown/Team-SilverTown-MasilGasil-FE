"use client";

import LogRecordModel from "./LogRecord.model";
import { LogRecordContextProvider } from "./context/LogRecordContext";

const LogRecord = () => {
  return (
    <LogRecordContextProvider>
      <LogRecordModel />
    </LogRecordContextProvider>
  );
};

export default LogRecord;
