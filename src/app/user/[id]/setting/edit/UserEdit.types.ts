import { IntensityOption } from "@/types/OriginDataType";

export interface UserEditData {
  nickname: string;
  sex: "male" | "female";
  birthDay: string;
  height: number;
  weight: number;
  intensity: IntensityOption;
}
