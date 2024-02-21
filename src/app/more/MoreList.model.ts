import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { Dummy } from "./MoreList.types";
import { getListRecommends } from "./MoreList.controller";
import { useInView } from "react-intersection-observer";

const useMoreListModel = () => {
  const infinityQuery = useInfiniteQuery<
    Dummy[],
    Object,
    InfiniteData<Dummy[]>,
    [_1: string, _2: string],
    number
  >({
    queryKey: ["moreList", "recommends"],
    queryFn: getListRecommends,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => (allPage.length * 5) / 5 + 1,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  // 반환 받은 ref를 통해 화면에 닿았는지 체크하는 hook
  const infinityRef = useInView({
    threshold: 0,
    delay: 0,
  });

  return {
    infinityQuery,
    infinityRef,
  };
};

export default useMoreListModel;
