import { PostDetailResponse, PostListResponse } from "@/types/Response/Post";
import { GET, POST } from "../clientRootAPI";
import { POST as POST_ENDPOINT } from "../endPoints";
import { PostCreateRequest, PostListRequest } from "@/types/Request";

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

export const getPostList = async (params: PostListRequest) => {
  const { cursor, depth1, depth2, depth3, order, size } = params;

  let endPoint = `${POST_ENDPOINT.GET_LIST}?`;

  if (depth1) endPoint += `depth1=${depth1}&depth2=${depth2}&depth3=${depth3}&`;
  if (cursor) endPoint += `cursor=${cursor}&`;
  if (order) endPoint += `order=${order}&`;
  if (size) endPoint += `size=${size}`;

  return GET<PostListResponse>({
    endPoint,
  });
};
