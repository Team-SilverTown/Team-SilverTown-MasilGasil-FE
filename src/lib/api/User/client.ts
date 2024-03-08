import { AuthResponse, MeResponse } from "@/types/Response";
import { AuthRequest } from "@/types/Request/User";

import { GET, POST } from "../clientRootAPI";
import { USER } from "../endPoints";

export const getAuthToken = async () => {
  return await GET<AuthResponse>({ endPoint: USER.AUTH });
};

export const authenticate = async (data: AuthRequest) => {
  return await POST<AuthResponse>({ endPoint: USER.AUTH, data });
};

export const getMe = async () => {
  return await GET<MeResponse>({ endPoint: USER.ME });
};
