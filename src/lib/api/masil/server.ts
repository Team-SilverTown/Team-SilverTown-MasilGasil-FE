"use server";

import { MASIL } from "../endPoints";
import { GET } from "../serverRootAPI";
import { MasilDetailResponse } from "@/types/Response";

export async function getMasilDetail(serviceToken: string, id: string) {
  const response = await GET<MasilDetailResponse>({
    endPoint: `${MASIL.GET_DETAIL}/${id}`,
    options: { headers: { Authorization: `Bearer ${serviceToken}` } },
  });

  return response;
}
