import { PostMoreListResponse } from "@/types/Response/Post";

import { GET } from "../clientRootAPI";
import { END_POINT } from "../endPoints";

interface getPopularTrailsInOurTownProps {
  depth1: string;
  depth2: string;
  depth3: string;
}

export const getPopularTrailsInOurTown = async ({
  depth1,
  depth2,
  depth3,
}: getPopularTrailsInOurTownProps) => {
  return await GET<PostMoreListResponse>({
    endPoint: END_POINT.POST.GET_POPULAR_PLACE({ depth1, depth2, depth3 }),
    auth: true,
  });
};
