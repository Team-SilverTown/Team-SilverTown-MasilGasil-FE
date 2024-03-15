"use server";

import { GET } from "../serverRootAPI";
import { POST } from "../endPoints";
import { PostMoreListResponse } from "@/types/Response/Post";

export const getPopularWalkingTrails = async (serviceToken: string) => {
  const response = await GET<PostMoreListResponse>({
    endPoint: `${POST.GET_DETAIL}?order=MOST_POPULAR&size=10`,
    options: {
      headers: { Authorization: `Bearer ${serviceToken}` },
    },
  });

  return response;
};

// export const getMyLikeWalkingTrails = async (serviceToken: string) => {
//   const response = await GET<PostMoreListResponse>({
//     endPoint: `${POST.GET_DETAIL}?order=POPULAR`,
//     options: {
//       headers: { Authorization: `Bearer ${serviceToken}` },
//     },
//   })

//   return response;
// }
