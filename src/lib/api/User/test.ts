import { AuthRequest } from "@/types/Request/User";
import { MeResponse } from "@/types/Response";

import apiClient from "../apiClient";
import { AUTH, USER } from "../endPoints";

export async function kakaoAuth(data: AuthRequest) {
  const response = await apiClient.post(
    AUTH.AUTH,
    {},
    {},
    { Authorization: `Bearer ${data.accessToken}` },
  );
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
  const response: MeResponse = await apiClient.get({ endpoint: USER.ME });
  return response;
}
