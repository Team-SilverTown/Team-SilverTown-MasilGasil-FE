"use server";

import { MASIL } from "../endPoints";
import { GET } from "../serverRootAPI";
import { MasilDetailResponse, RecentMasilsResponse } from "@/types/Response";

export async function getMasilDetail(serviceToken: string, id: string) {
  const response = await GET<MasilDetailResponse>({
    endPoint: `${MASIL.GET_DETAIL}/${id}`,
    options: { headers: { Authorization: `Bearer ${serviceToken}` } },
  });

  return response;
}

export async function getRecentMasils(serviceToken: string, size?: number) {
  const response = await GET<RecentMasilsResponse>({
    endPoint: `${MASIL.GET_RECENT}?size=${size ? size : ""}`,
    options: { headers: { Authorization: `Bearer ${serviceToken}` } },
  });

  return response;
}
