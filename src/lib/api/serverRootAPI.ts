import { NextRequest, RequestInit } from "next/dist/server/web/spec-extension/request";

export const request = async <T>(
  url: string,
  method: string,
  options?: RequestInit,
): Promise<T | undefined> => {
  try {
    const response = await fetch(`${process.env.DB_BASE_URL}${url}`, {
      method,
      ...options,
    });

    if (response.ok) {
      return await response.json();
    }

    throw new Error(`API ERROR - status ${response.status}`);
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const SERVER_GET = async <T>({
  endPoint,
  options,
}: {
  endPoint: string;
  options?: RequestInit;
}) => {
  return await request<T>(endPoint, "GET", options);
};
