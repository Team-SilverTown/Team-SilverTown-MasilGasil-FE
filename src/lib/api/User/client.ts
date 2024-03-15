import {
  AuthResponse,
  CheckNickNameResponse,
  EditUserResponse,
  MeResponse,
} from "@/types/Response";
import { AuthRequest, SignUpRequest, UserEditRequest } from "@/types/Request/User";

import { GET, POST, PUT } from "../clientRootAPI";
import { USER } from "../endPoints";

export const getAuthToken = async () => {
  return await GET<AuthResponse>({ endPoint: USER.AUTH });
};

export const authenticate = async (data: AuthRequest) => {
  return await POST<AuthResponse>({ endPoint: USER.AUTH, data });
};

export const getMe = async () => {
  return await GET<MeResponse>({ endPoint: USER.ME, auth: true });
};

export const checkDuplicateNickname = async (nickname: string) => {
  return await GET<CheckNickNameResponse>({
    endPoint: `${USER.CHECK_NICKNAME}?nickname=${nickname}`,
    auth: true,
  });
};

export const signUp = async (data: SignUpRequest) => {
  return await PUT({
    endPoint: USER.SIGNUP,
    data,
    auth: true,
  });
};

export const postEditUser = async (newUserData: MeResponse) => {
  const { nickname, sex, birthDate, height, weight, exerciseIntensity } = newUserData;
  const newData: UserEditRequest = {
    nickname,
    sex,
    birthDate,
    height: height ? +height : undefined,
    weight: weight ? +weight : undefined,
    exerciseIntensity,
  };

  return await PUT<EditUserResponse>({ endPoint: USER.EDIT_USER, data: newData, auth: true });
};
