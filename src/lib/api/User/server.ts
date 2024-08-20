"use server";

import apiClient from "@/lib/client/apiClient";
import { AuthRequest } from "@/types/Request/User";
import { AuthResponse, MeResponse, ProfileResponse } from "@/types/Response";

import { END_POINT } from "../endPoints";
import { GET } from "../serverRootAPI";

import { redirect } from "next/navigation";

export async function kakaoAuth(data: AuthRequest) {
  const response: AuthResponse = await apiClient.post({
    endpoint: END_POINT.AUTH.LOGIN,
    customHeaders: { Authorization: `Bearer ${data.accessToken}` },
  });
  return response;
}

export async function refreshAccessToken({
  serviceToken,
  refreshToken,
}: {
  serviceToken: string;
  refreshToken: string;
}) {
  try {
    const response = await fetch(`${process.env.DB_BASE_URL}${END_POINT.AUTH.REFRESH}`, {
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
      throw {
        message: "fail to get new access token",
      };
    }
    return refreshedToken;
  } catch (error) {
    throw error;
  }
}

export async function getMe() {
  const response: MeResponse = await apiClient.get({ endpoint: END_POINT.USER.ME });
  return response;
}

export async function getUserProfile(userId: string | number) {
  try {
    const response = await GET<ProfileResponse>({
      endPoint: END_POINT.USER.PROFILE(userId),
    });
    return response;
  } catch (error) {
    console.error(error);
    return redirect(`/not-found`);
  }
}
