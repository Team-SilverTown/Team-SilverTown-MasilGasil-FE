import { Dispatch, SetStateAction } from "react";

import { GeoPosition, Pin } from "@/types/OriginDataType";

export type LogPageStep = "LOG_RECORD_STANDBY" | "LOG_RECORD_RECORDING" | "LOG_RECORD_EDITING";

export type SetCurrentPinIndex = Dispatch<SetStateAction<number>>;
export type SetIsActiveExitAnimation = Dispatch<SetStateAction<boolean>>;

export interface NavigationData {
  pins: Pin[];
  path: GeoPosition[];
}
