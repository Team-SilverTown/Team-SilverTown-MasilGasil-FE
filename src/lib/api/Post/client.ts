import { PostCreateRequest, PostListRequest } from "@/types/Request";
import { PostDetailResponse, PostListResponse } from "@/types/Response/Post";

import { DELETE, GET, POST, PUT } from "../clientRootAPI";
import { POST as POST_ENDPOINT } from "../endPoints";

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
  const { cursor, depth1, depth2, depth3, order, size, authorId } = params;

  let endPoint = `${POST_ENDPOINT.GET_LIST}?`;

  if (authorId) endPoint += `authorId=${authorId}&`;
  if (depth1) endPoint += `depth1=${depth1}&depth2=${depth2}&depth3=${depth3}&`;
  if (cursor) endPoint += `cursor=${cursor}&`;
  if (order) endPoint += `order=${order}&`;
  if (size) endPoint += `size=${size}`;

  return GET<PostListResponse>({
    endPoint,
    auth: true,
  });
};

interface fetchPostLikeToggleProps {
  postId: string;
  data: { isLike: boolean };
}

export const fetchPostLikedToggle = async ({ postId, data }: fetchPostLikeToggleProps) => {
  return await PUT({
    endPoint: `${POST_ENDPOINT.LIKED_STATUS}/${postId}/likes`,
    data,
    auth: true,
  });
};

interface DeletePostProps {
  id: string;
}

export const deletePost = async ({ id }: DeletePostProps) => {
  return await DELETE({
    endPoint: POST_ENDPOINT.DELETE(id),
    auth: true,
  });
};
