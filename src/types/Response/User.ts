import { IntensityOption } from "../OriginDataType";

export interface AuthResponse {
  token?: string;
}

export interface MeResponse {
  userId: 1;
  nickname: string;
  profileImg?: string;
  sex?: "MALE" | "FEMALE";
  birthDate?: string;
  height?: number;
  weight?: number;
  exerciseIntensity?: IntensityOption;
}

export interface CheckNickNameResponse {
  isDuplicated: boolean;
  message: string;
}

// export interface SignUpResponse {}