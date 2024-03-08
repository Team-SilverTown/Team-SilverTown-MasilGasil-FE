import { IntensityOption } from "../OriginDataType";

export interface AuthResponse {
  token?: string;
}

export interface MeResponse {
  sex: "MALE" | "FEMALE" | null;
  birthDate: string | null;
  height: number | null;
  weight: number | null;
  exerciseIntensity: IntensityOption;
}
