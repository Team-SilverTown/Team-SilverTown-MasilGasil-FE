"use server";

import { AuthRequest } from "@/types/Request/User";
import { AuthResponse, MeResponse, ProfileResponse } from "@/types/Response";

import { AUTH, USER } from "../endPoints";
import { GET, POST } from "../serverRootAPI";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function authenticate(data: AuthRequest) {
  const response = await POST<AuthResponse>({
    endPoint: AUTH.AUTH,
    options: { cache: "no-store", headers: { Authorization: `Bearer ${data.accessToken}` } },
  });

  return response;
}

export async function refreshToken({
  serviceToken,
  refreshToken,
}: {
  serviceToken: string;
  refreshToken: string;
}) {
  try {
    const response = await fetch(`${process.env.DB_BASE_URL}${AUTH.REFRESH}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${serviceToken}`,
        "Refresh-Token": refreshToken,
      },
      method: "GET",
      cache: "no-store",
    });

    const refreshedToken = response.headers.get("authorization")?.split(" ")[1];

    if (!response.ok) {
      throw refreshedToken;
    }

    return refreshedToken;
  } catch (error) {
    console.error(error);
  }
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
