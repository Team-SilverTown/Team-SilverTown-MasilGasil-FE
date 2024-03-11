import { PostDetailResponse } from "@/types/Response/Post";
import { GET } from "../clientRootAPI";
import { POST } from "../endPoints";

export const getPostDetail = async ({ id }: { id: string }) => {
  return await GET<PostDetailResponse>({
    endPoint: `${POST.GET_DETAIL}/${id}`,
    auth: true,
  });
};
