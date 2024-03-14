"use server";

import { POST } from "../endPoints";
import { GET } from "../serverRootAPI";
import { PostDetailResponse } from "@/types/Response/Post";

export async function getPostDetail(serviceToken: string, id: string) {
  const response = await GET<PostDetailResponse>({
    endPoint: `${POST.GET_DETAIL}/${id}`,
    options: { headers: { Authorization: `Bearer ${serviceToken}` } },
  });

  return response;
}
