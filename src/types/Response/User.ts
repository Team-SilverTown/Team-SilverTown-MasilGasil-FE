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
  isPublic: boolean;
}

export interface ProfileResponse {
  nickname: string;
  profileImg: string;
  totalDistance: number;
  totalCount: number;
  totalCalories: number;
}

export interface CheckNickNameResponse {
  isDuplicated: boolean;
  nickname: string;
}

// export interface SignUpResponse {}
export interface EditUserResponse {
  nickname: string;
  sex: "MALE" | "FEMALE";
  birthDate: string;
  height: number;
  weight: number;
  exerciseIntensity: IntensityOption;
}
