import { useEffect } from "react";
import LogRecordEditView from "./LogRecordEdit.view";

const LogRecordEditController = () => {
  useEffect(() => {
    // clean up
    return () => {
      console.log("Edit Component CleanUp");
    };
  }, []);
  return <LogRecordEditView />;
};

export default LogRecordEditController;
