import { useState } from "react";
import { LogPageStep } from "./LogRecord.types";
import { MasilRecordRequest } from "@/types/Request";
import { DEFAULT_LOG_DATA } from "./LogRecord.constants";

const useLogRecordModel = () => {
  // State
  const [isMapResizing, setIsMapResizing] = useState(false);

  return {
    isMapResizing,
    setIsMapResizing,
  };
};

export default useLogRecordModel;
