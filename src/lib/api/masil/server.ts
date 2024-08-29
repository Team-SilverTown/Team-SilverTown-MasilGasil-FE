"use server";

import { MasilDetailResponse, RecentMasilsResponse } from "@/types/Response";

import { END_POINT } from "../endPoints";
import { GET } from "../serverRootAPI";

import { redirect } from "next/navigation";

export async function getMasilDetail(serviceToken: string, id: string) {
  const response = await GET<MasilDetailResponse>({
    endPoint: END_POINT.MASIL.GET_DETAIL(id),
    options: {
      headers: { Authorization: `Bearer ${serviceToken}` },
      next: { revalidate: 1000 * 60 * 60 },
    },
  });

  return response;
}

export async function getRecentMasils(serviceToken: string, size?: number) {
  try {
    const response = await GET<RecentMasilsResponse>({
      endPoint: END_POINT.MASIL.GET_RESENT_LIST({ size }),
      options: { headers: { Authorization: `Bearer ${serviceToken}` } },
    });
    return response;
  } catch (error) {
    console.error(error);
    return redirect(`/not-found`);
  }
}
