"use client";

import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";
import MoreListView from "./MoreList.view";

interface getListRecommendsProps {
  pageParam?: number;
}

/**
 *
 * @param pageParam 전달 받은 initialPageParam 데이터
 * @returns fetch를 통해 호출한 데이터의 json()을 리턴합니다.
 */
export const getListRecommends = async ({ pageParam }: getListRecommendsProps) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${pageParam}`, {
    next: {
      tags: ["moreList", "recommends"],
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const MoreListController = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["moreList", "recommends"],
    queryFn: getListRecommends,
    initialPageParam: 1,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <MoreListView />
    </HydrationBoundary>
  );
};

export default MoreListController;
