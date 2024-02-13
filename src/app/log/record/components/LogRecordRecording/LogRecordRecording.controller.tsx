import { useEffect } from "react";
import LogRecordRecordingView from "./LogRecordRecording.view";

const LogRecordRecordingController = () => {
  useEffect(() => {
    // clean up
    return () => {
      console.log("Recording Component cleanUp");
    };
  }, []);

  return <LogRecordRecordingView />;
};

export default LogRecordRecordingController;
