"use client";

import LogRecordView from "./LogRecord.view";
import { LogRecordContextProvider } from "./context/LogRecordContext";

const LogRecord = () => {
  return (
    <LogRecordContextProvider>
      <LogRecordView />
    </LogRecordContextProvider>
  );
};

export default LogRecord;
