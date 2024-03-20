"use server";

import { AuthRequest } from "@/types/Request/User";
import { USER } from "../endPoints";
import { GET, POST } from "../serverRootAPI";
import { MeResponse, ProfileResponse } from "@/types/Response";

export async function authenticate(data: AuthRequest) {
  const response = await POST<AuthRequest>({
    endPoint: USER.AUTH,
    options: { cache: "no-store", headers: { Authorization: `Bearer ${data.token}` } },
  });
  return response;
}

export async function getMe(serviceToken: string) {
<<<<<<< HEAD
  const response = await GET<MeResponse>({
    endPoint: USER.ME,
    options: { cache: "no-store", headers: { Authorization: `Bearer ${serviceToken}` } },
  });

  return response;
=======
  try {
    const response = await GET<MeResponse>({
      endPoint: USER.ME,
      options: { cache: "no-store", headers: { Authorization: `Bearer ${serviceToken}` } },
    });
    return response;
  } catch (error) {
    return undefined;
  }
>>>>>>> origin/deploy/#270
}

export async function getUserProfile(userId: string | number) {
  const response = await GET<ProfileResponse>({
    endPoint: `${USER.PROFILE}/${userId}`,
  });

  return response;
}
