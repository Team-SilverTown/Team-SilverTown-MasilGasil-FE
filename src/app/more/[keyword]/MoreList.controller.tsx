"use client";

import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";
import MoreListView from "./MoreList.view";
import fetchMyLogList from "./lib/fetchMoreList";
import useMoreListModel from "./MoreList.model";

const MoreListController = async () => {
  const { listInfo } = useMoreListModel();

  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["moreList", listInfo.keyword],
    queryFn: ({ pageParam, queryKey }) => fetchMyLogList({ pageParam, queryKey }),
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
