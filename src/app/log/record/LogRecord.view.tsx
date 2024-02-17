import * as S from "./LogRecord.styles";

import {
  OnErrorWatcher,
  LogPageStep,
  UpdateUserLocation,
  SetPageStep,
  SetLogData,
} from "./LogRecord.types";
import { LogRecordEdit, LogRecordRecording, LogRecordStandby } from "./components";
import { MasilRecordRequest } from "@/types/Request";
import MasilMap from "@/components/MasilMap/MasilMap";
import { Button } from "@/components";
import { ChevronLeft } from "@/components/icons";
import { OnCreatePathLine } from "@/components/MasilMap/MasilMap.types";
import { GeoPosition } from "@/types/OriginDataType";

interface LogRecordViewProps {
  pageStep: LogPageStep;
  logData: MasilRecordRequest;

  userLocation: GeoPosition;

  setPageStep: SetPageStep;
  setLogData: SetLogData;
  onErrorWatcher: OnErrorWatcher;
  updateUserLocation: UpdateUserLocation;
  handleClickFallback: () => void;
  onCreatePathLine: OnCreatePathLine;
}

const LogRecordView = ({
  pageStep,
  logData,
  userLocation,
  setLogData,
  setPageStep,
  onErrorWatcher,
  updateUserLocation,
  handleClickFallback,
  onCreatePathLine,
}: LogRecordViewProps) => {
  return (
    <S.LogRecordLayout>
      <MasilMap
        center={userLocation}
        path={logData.path}
        pins={logData.pins}
        onCreatePathLine={onCreatePathLine}
      />

      <S.LogRecordTop>
        <Button
          variant="naked"
          onClickHandler={handleClickFallback}
        >
          <ChevronLeft
            strokeWidth={3}
            width={32}
            height={32}
          />
        </Button>
      </S.LogRecordTop>

      {pageStep === "LOG_RECORD_STANDBY" && (
        <LogRecordStandby
          setLogData={setLogData}
          setPageStep={setPageStep}
          onErrorWatcher={onErrorWatcher}
          updateUserLocation={updateUserLocation}
        />
      )}

      {pageStep === "LOG_RECORD_RECORDING" && (
        <LogRecordRecording
          logData={logData}
          setLogData={setLogData}
          setPageStep={setPageStep}
          onErrorWatcher={onErrorWatcher}
          updateUserLocation={updateUserLocation}
        />
      )}

      {pageStep === "LOG_RECORD_EDITING" && <LogRecordEdit />}
    </S.LogRecordLayout>
  );
};

export default LogRecordView;
