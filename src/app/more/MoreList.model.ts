"use client";

import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { Dummy, KeywordType } from "./MoreList.types";
import { useInView } from "react-intersection-observer";
import fetchMyLogList from "./lib/fetchMoreList";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { SEARCH_KEYWORD } from "./MoreList.constants";

const useMoreListModel = () => {
  const searchParams = useSearchParams();
  const searchKeyword = searchParams.get("keyword") as KeywordType;

  const listInfo = SEARCH_KEYWORD.filter(({ keyword }) => keyword === searchKeyword)[0];

  if (!listInfo) {
    throw new Error("'keyword' 파라미터가 없습니다.");
  }

  const [sortTab, setSortTab] = useState(listInfo.filter);

  const infinityQuery = useInfiniteQuery<
    Dummy[],
    Object,
    InfiniteData<Dummy[]>,
    [_1: string, _2: string],
    number
  >({
    queryKey: ["moreList", listInfo.keyword],
    queryFn: ({ pageParam, queryKey }) => fetchMyLogList({ pageParam, queryKey }),
    initialPageParam: 1,
    getNextPageParam: (_, allPage) => (allPage.length * 5) / 5 + 1,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  // 반환 받은 ref를 통해 화면에 닿았는지 체크하는 hook
  const inViewResponse = useInView({
    threshold: 0,
    delay: 0,
  });

  return {
    sortTab,
    setSortTab,
    infinityQuery,
    inViewResponse,
    listInfo,
  };
};

export default useMoreListModel;
