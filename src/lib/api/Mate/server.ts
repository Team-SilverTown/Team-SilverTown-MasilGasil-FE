import { MateDetailListResponse, MateDetailResponse } from "@/types/Response";

import { MATE } from "../endPoints";
import { GET } from "../serverRootAPI";

export async function getMateDetail(id: string) {
  const response = await GET<MateDetailResponse>({
    endPoint: `${MATE.GET_DETAIL}/${id}`,
    options: { cache: "no-store" },
  });

  return response;
}

interface getMateDetailListProps {
  postId?: number;
  depth1?: string;
  depth2?: string;
  depth3?: string;
  cursor?: string;
  size?: number;
}

export async function getMateDetailList(params: getMateDetailListProps) {
  const { postId, depth1, depth2, depth3, cursor, size } = params;

  let endPoint = `${MATE.GET_DETAIL}?`;

  if (postId) endPoint += `postId=${postId}&`;
  if (depth1) endPoint += `depth1=${depth1}&depth2=${depth2}&depth3=${depth3}&`;
  if (cursor) endPoint += `cursor=${cursor}&`;
  if (size) endPoint += `size=${size ? size : 10}`;

  const response = await GET<MateDetailListResponse>({
    endPoint,
  });

  return response;
}
