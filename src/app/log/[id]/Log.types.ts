import { IntensityOption } from "@/types/OriginDataType";

export enum TabType {
  Memo = 0,
  Pin = 1,
}

// 임시 데이터
export interface UserInfoType {
  sex?: "MALE" | "FEMALE";
  birthDate?: string;
  height?: number;
  weight?: number;
  exerciseIntensity?: IntensityOption;
}
