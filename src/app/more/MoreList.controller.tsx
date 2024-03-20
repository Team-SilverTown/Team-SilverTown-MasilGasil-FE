import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";
import MoreListView from "./MoreList.view";
import fetchMoreList from "./lib/fetchMoreList";

interface MoreListControllerProps {
  keyword: string;
  order: string;
}

const MoreListController = async ({ keyword, order }: MoreListControllerProps) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["moreList", keyword, order],
    queryFn: fetchMoreList,
    initialPageParam: 1,
  });

  return (
    <MoreListView
      keyword={keyword}
      order={order}
    />
  );
};

export default MoreListController;
