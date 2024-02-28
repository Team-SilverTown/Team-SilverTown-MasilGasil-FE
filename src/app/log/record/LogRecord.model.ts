import { useState } from "react";

const useLogRecordModel = () => {
  // State
  const [isMapResizing, setIsMapResizing] = useState(false);

  return {
    isMapResizing,
    setIsMapResizing,
  };
};

export default useLogRecordModel;
