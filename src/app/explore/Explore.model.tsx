"use client";

import { useMemo, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import { getPostList } from "@/lib/api/Post/client";
import { PostListRequest } from "@/types/Request";
import { POST_KEY } from "@/lib/api/queryKeys";
import { LocationMap } from "@/types/OriginDataType";

const TAKE = 5;

const useExploreModel = () => {
  const [locationData, setLocationData] = useState<LocationMap | null>(null);
  const [orderMode, setOrderMode] = useState<"LATEST" | "MOST_POPULAR">("LATEST");

  const fetchHandler = async (pageParam?: string) => {
    const params: PostListRequest = {
      depth1: locationData?.depth1!,
      depth2: locationData?.depth2!,
      depth3: locationData?.depth3!,
      cursor: pageParam!,
      order: orderMode,
      size: TAKE,
    };

    const data = await getPostList(params);

    return data;
  };

  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: [
      POST_KEY.POST_LIST,
      locationData?.depth1,
      locationData?.depth2,
      locationData?.depth3,
      orderMode,
    ],
    queryFn: ({ pageParam }) => fetchHandler(pageParam),
    initialPageParam: "0",
    getNextPageParam: (lastPage) => lastPage?.nextCursor ?? null,
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
    enabled: !!locationData,
  });

  const postsData = useMemo(
    () => (data && data.pages.flatMap((page) => page.contents)) ?? [],
    [data],
  );

  return {
    locationData,
    setLocationData,
    orderMode,
    setOrderMode,
    postsData,
    fetchNextPage,
    isFetchingNextPage,
  };
};

export default useExploreModel;
