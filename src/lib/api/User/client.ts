import { AuthRequest, SignUpRequest, UserEditRequest } from "@/types/Request/User";
import {
  AuthResponse,
  CheckNickNameResponse,
  EditUserResponse,
  MeResponse,
} from "@/types/Response";

import { GET, PATCH, POST, PUT } from "../clientRootAPI";
import { END_POINT } from "../endPoints";

export const authenticate = async (data: AuthRequest) => {
  return await POST<AuthResponse>({ endPoint: END_POINT.AUTH.LOGIN, data });
};

export const getMe = async () => {
  return await GET<MeResponse>({ endPoint: END_POINT.USER.ME, auth: true });
};

export const checkDuplicateNickname = async (nickname: string) => {
  return await GET<CheckNickNameResponse>({
    endPoint: END_POINT.USER.CHECK_NICKNAME(nickname),
    auth: true,
  });
};

export const getUserInfo = async (userId: string) => {
  return await GET<MeResponse>({ endPoint: END_POINT.USER.PROFILE(userId) });
};

export const signUp = async (data: SignUpRequest) => {
  return await PUT({
    endPoint: END_POINT.AUTH.SIGNUP,
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

  return await PUT<EditUserResponse>({
    endPoint: END_POINT.USER.EDIT_USER,
    data: newData,
    auth: true,
  });
};

export const patchIsPublic = async () => {
  return PATCH({ endPoint: END_POINT.USER.TOGGLE_PUBLIC, auth: true });
};

export const changeProfileImage = async ({ image }: { image: File }) => {
  const formData = new FormData();
  formData.append("profileImg", image);

  return await PUT({ endPoint: END_POINT.USER.UPLOAD_IMAGE, data: formData, auth: true });
};
