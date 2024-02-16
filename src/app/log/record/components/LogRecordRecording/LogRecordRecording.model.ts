import { useState } from "react";

const useLogRecordRecordingModel = () => {
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  return {
    timerId,
    setTimerId,
  };
};

export default useLogRecordRecordingModel;
