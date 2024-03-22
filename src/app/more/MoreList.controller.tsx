"use client";

import { useMemo } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import { POST_KEY } from "@/lib/api/queryKeys";
import { getPostList } from "@/lib/api/Post/client";
import useUserLocationStore from "@/lib/stores/useUserLocationStore";
import { PostListRequest } from "@/types/Request";

import MoreListView from "./MoreList.view";
import { TAKE } from "./MoreList.constants";
import { KeywordType } from "./MoreList.types";

interface MoreListControllerProps {
  keyword: KeywordType;
  order: string;
  userId?: number;
}

const MoreListController = ({ keyword, order, userId }: MoreListControllerProps) => {
  const { userAddress } = useUserLocationStore();

  const orderMode = order === "latest" ? "LATEST" : "MOST_POPULAR";

  const fetchHandler = async ({ pageParam }: any) => {
    let params: PostListRequest = {
      cursor: pageParam ?? null,
      order: orderMode,
      size: TAKE,
    };

    if (keyword === "my_post") {
      params.authorId = userId;
    }

    if (keyword === "area_popular") {
      params.depth1 = userAddress.depth1;
      params.depth2 = userAddress.depth2;
      params.depth3 = userAddress.depth3;
    }

    const data = await getPostList(params);

    return data;
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: [POST_KEY.POST_LIST, keyword, orderMode, userId],
    queryFn: fetchHandler,
    initialPageParam: null,
    getNextPageParam: (lastPage) => {
      return lastPage.nextCursor;
    },
    refetchOnWindowFocus: false,
    staleTime: 1000 * 30,
    gcTime: 1000 * 30,
  });

  const listOriginData = useMemo(
    () => (data && data.pages.flatMap((page) => page.contents)) ?? undefined,
    [data],
  );

  return (
    <MoreListView
      keyword={keyword}
      order={order}
      listData={keyword !== "my_like" ? listOriginData : []}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
    />
  );
};

export default MoreListController;
