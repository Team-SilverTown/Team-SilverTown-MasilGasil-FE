import { GeoPosition } from "@/types/OriginDataType";
import { MasilRecordRequest } from "@/types/Request";
import { Dispatch, SetStateAction } from "react";

export type LogPageStep = "LOG_RECORD_STANDBY" | "LOG_RECORD_RECORDING" | "LOG_RECORD_EDITING";

export type OnErrorWatcher = (error: GeolocationPositionError) => void;
export type OnDrag = (target: kakao.maps.Map) => void;

export type UpdateUserLocation = (geo: GeolocationPosition) => void;

export type SetPageStep = Dispatch<SetStateAction<LogPageStep>>;
export type SetWatchCode = Dispatch<SetStateAction<number>>;
export type SetLogData = Dispatch<SetStateAction<MasilRecordRequest>>;
export type SetIsDragging = Dispatch<SetStateAction<boolean>>;
export type SetDragPosition = Dispatch<SetStateAction<GeoPosition>>;
