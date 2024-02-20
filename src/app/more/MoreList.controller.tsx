"use client";

import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";
import MoreListView from "./MoreList.view";

interface Props {
  pageParam?: number;
}

export async function getListRecommends({ pageParam }: Props) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${pageParam}`, {
    next: {
      tags: ["moreList", "recommends"],
    },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

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
