import { useEffect } from "react";
import LogRecordStandbyView from "./LogRecordStandby.view";

interface LogRecordStandbyControllerProps {
  watchCode: number;
  setWatchCode: (code: number) => void;
}

const LogRecordStandbyController = ({
  watchCode,
  setWatchCode,
}: LogRecordStandbyControllerProps) => {
  useEffect(() => {
    return () => {
      navigator.geolocation.clearWatch(watchCode);
      console.log("Standby Component cleanUp");
    };
  }, []);

  return <LogRecordStandbyView onClick={() => {}} />;
};

export default LogRecordStandbyController;
