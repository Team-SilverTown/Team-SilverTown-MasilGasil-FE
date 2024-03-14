"use server";

import { GET } from "../serverRootAPI";
import { POST } from "../endPoints";
import { PostMoreListResponse } from "@/types/Response/Post";

interface fetchPopularTrailsInOurTownProps {
  serviceToken: string;
  depth1: string;
  depth2: string;
  depth3: string;
}

export const fetchPopularTrailsInOurTown = async ({
  serviceToken,
  depth1,
  depth2,
  depth3,
}: fetchPopularTrailsInOurTownProps) => {
  const response = await GET<PostMoreListResponse>({
    endPoint: `${POST.GET_DETAIL}?depth1=${depth1}&depth2=${depth2}&depth3=${depth3}&order=POPULAR`,
    options: {
      headers: { Authorization: `Bearer ${serviceToken}` },
    },
  });

  return response;
};

export const getPopularWalkingTrails = async (serviceToken: string) => {
  const response = await GET<PostMoreListResponse>({
    endPoint: `${POST.GET_DETAIL}`,
    options: {
      headers: { Authorization: `Bearer ${serviceToken}` },
    },
  });
};
