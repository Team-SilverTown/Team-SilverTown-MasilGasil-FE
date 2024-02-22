import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";
import MoreListView from "./MoreList.view";
import fetchMoreList from "./lib/fetchMoreList";

interface MoreListControllerProps {
  keyword: string;
}

const MoreListController = async ({ keyword }: MoreListControllerProps) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["moreList", keyword],
    queryFn: fetchMoreList,
    initialPageParam: 1,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <MoreListView keyword={keyword} />
    </HydrationBoundary>
  );
};

export default MoreListController;
