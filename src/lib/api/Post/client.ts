import { PostDetailResponse } from "@/types/Response/Post";
import { GET, POST } from "../clientRootAPI";
import { POST as POST_ENDPOINT } from "../endPoints";
import { PostCreateRequest } from "@/types/Request";

export const getPostDetail = async ({ id }: { id: string }) => {
  return await GET<PostDetailResponse>({
    endPoint: `${POST_ENDPOINT.GET_DETAIL}/${id}`,
    auth: true,
  });
};

export const postPostCreate = async ({ postData }: { postData: PostCreateRequest }) => {
  return await POST<{ id: string }>({
    endPoint: POST_ENDPOINT.POST,
    data: postData,
    auth: true,
  });
};
