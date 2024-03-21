import { IntensityOption } from "../OriginDataType";

export interface MeRequest {
  "access token": string;
}

export interface AuthRequest {
  accessToken: string;
}

export interface SignUpRequest {
  nickname: string;
  sex?: "MALE" | "FEMALE";
  birthDate?: string;
  height?: number;
  weight?: number;
  exerciseIntensity?: IntensityOption;
  isAllowingMarketing: boolean;
  isPersonalInfoConsented: boolean;
  isLocationInfoConsented: boolean;
  isUnderAgeConsentConfirmed: boolean;
}

export interface UserEditRequest {
  nickname: string;
  sex?: string;
  birthDate?: string;
  height?: number;
  weight?: number;
  exerciseIntensity?: IntensityOption;
}
