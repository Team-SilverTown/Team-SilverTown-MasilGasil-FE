"use server";

import { AuthRequest } from "@/types/Request/User";
import { USER } from "../endPoints";
import { GET, POST } from "../serverRootAPI";
import { MeResponse, ProfileResponse } from "@/types/Response";
import { redirect } from "next/navigation";

export async function authenticate(data: AuthRequest) {
  const response = await POST<AuthRequest>({
    endPoint: USER.AUTH,
    options: { cache: "no-store", headers: { Authorization: `Bearer ${data.token}` } },
  });
  return response;
}

export async function getMe(serviceToken: string) {
  try {
    const response = await GET<MeResponse>({
      endPoint: USER.ME,
      options: { cache: "no-store", headers: { Authorization: `Bearer ${serviceToken}` } },
    });
    return response;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export async function getUserProfile(userId: string | number) {
  try {
    const response = await GET<ProfileResponse>({
      endPoint: `${USER.PROFILE}/${userId}`,
    });
    return response;
  } catch (error) {
    console.error(error);
    return redirect(`/not-found`);
  }
}
