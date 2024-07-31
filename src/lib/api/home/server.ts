"use server";

import { PostMoreListResponse } from "@/types/Response/Post";

import { POST } from "../endPoints";
import { GET } from "../serverRootAPI";

export const getPopularWalkingTrails = async () => {
  const response = await GET<PostMoreListResponse>({
    endPoint: `${POST.GET_DETAIL}?order=MOST_POPULAR&size=10`,
  });

  return response;
};
