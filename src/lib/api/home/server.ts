"use server";

import { PostMoreListResponse } from "@/types/Response/Post";

import { END_POINT } from "../endPoints";
import { GET } from "../serverRootAPI";

export const getPopularWalkingTrails = async () => {
  const response = await GET<PostMoreListResponse>({
    endPoint: END_POINT.POST.GET_POPULAR,
  });

  return response;
};
