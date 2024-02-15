export type LogPageStep = "LOG_RECORD_STANDBY" | "LOG_RECORD_RECORDING" | "LOG_RECORD_EDITING";

export type OnErrorWatcher = (error: GeolocationPositionError) => void;

export type UpdateUserLocation = (geo: GeolocationPosition) => void;
