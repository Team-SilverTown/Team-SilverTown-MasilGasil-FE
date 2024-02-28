import { Dispatch, SetStateAction } from "react";

export type LogPageStep = "LOG_RECORD_STANDBY" | "LOG_RECORD_RECORDING" | "LOG_RECORD_EDITING";

export type SetCurrentPinIndex = Dispatch<SetStateAction<number>>;
export type SetIsMapResizing = Dispatch<SetStateAction<boolean>>;
export type SetIsActiveExitAnimation = Dispatch<SetStateAction<boolean>>;
