import { PostMoreListResponse } from "@/types/Response/Post";

import { GET } from "../clientRootAPI";
import { POST } from "../endPoints";

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
    endPoint: `${POST.GET_DETAIL}?depth1=${depth1}&depth2=${depth2}&depth3=${depth3}&order=MOST_POPULAR&size=10`,
    auth: true,
  });
};
