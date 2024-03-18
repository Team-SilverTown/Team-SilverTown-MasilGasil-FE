"use client";

import { QueryClient, useInfiniteQuery } from "@tanstack/react-query";
import MoreListView from "./MoreList.view";
import fetchMoreList from "./lib/fetchMoreList";
import { POST_KEY } from "@/lib/api/queryKeys";
import { PostListRequest } from "@/types/Request";
import useUserLocationStore from "@/stores/useUserLocationStore";
import { TAKE } from "./MoreList.constants";
import { getPostList } from "@/lib/api/Post/client";
import { KeywordType } from "./MoreList.types";
import { useMemo } from "react";

interface MoreListControllerProps {
  keyword: KeywordType;
  order: string;
}

const MoreListController = ({ keyword, order }: MoreListControllerProps) => {
  const { userAddress } = useUserLocationStore();

  const orderMode = order === "latest" ? "LATEST" : "MOST_POPULAR";

  const fetchHandler = async ({ pageParam }: any) => {
    let params: PostListRequest = {
      cursor: pageParam ?? null,
      order: orderMode,
      size: TAKE,
    };

    if (keyword === "area_popular") {
      params.depth1 = userAddress.depth1;
      params.depth2 = userAddress.depth2;
      params.depth3 = userAddress.depth3;
    }

    const data = await getPostList(params);

    return data;
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: [POST_KEY.POST_LIST, keyword, orderMode],
    queryFn: fetchHandler,
    initialPageParam: null,
    getNextPageParam: (lastPage) => {
      return lastPage.nextCursor;
    },
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60,
  });

  const listOriginData = useMemo(
    () => (data && data.pages.flatMap((page) => page.contents)) ?? [],
    [data],
  );

  return (
    <MoreListView
      keyword={keyword}
      order={order}
      listData={listOriginData}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
    />
  );
};

export default MoreListController;
