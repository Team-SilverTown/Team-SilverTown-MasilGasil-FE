"use server";

import { redirect } from "next/navigation";
import { POST } from "../endPoints";
import { GET } from "../serverRootAPI";
import { PostDetailResponse, PostListResponse } from "@/types/Response/Post";

export async function getPostDetail(serviceToken: string, id: string) {
  const response = await GET<PostDetailResponse>({
    endPoint: `${POST.GET_DETAIL}/${id}`,
    options: { headers: { Authorization: `Bearer ${serviceToken}` } },
  });

  return response;
}

export async function getRecentPostsById(serviceToken: string, userId: number, size?: number) {
  try {
    const response = await GET<PostListResponse>({
      endPoint: `${POST.GET_DETAIL}?authorId=${userId}&size=${size ? size : 10}`,
      options: { headers: { Authorization: `Bearer ${serviceToken}` } },
    });

    return response;
  } catch (error) {
    console.error(error);
    return redirect(`/not-found`);
  }
}
