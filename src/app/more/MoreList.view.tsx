"use client";

import React, { useEffect, useMemo } from "react";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import fetchMoreList from "./lib/fetchMoreList";
import { REPEAT_NUMBER } from "./MoreList.constants";
import { Dummy } from "./MoreList.types";

import { ListCard, ListCardSkeleton } from "@/components";

import * as S from "./MoreList.styles";

interface MoreListViewProps {
  keyword: string;
  order: string;
}

const MoreListView = ({ keyword, order }: MoreListViewProps) => {
  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, isError } =
    useInfiniteQuery<
      Dummy[],
      Object,
      InfiniteData<Dummy[]>,
      [_1: string, _2: string, _3: string],
      number
    >({
      queryKey: ["moreList", keyword, order],
      queryFn: fetchMoreList,
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPage) => {
        if (lastPage.length < REPEAT_NUMBER) return;
        return (allPage.length * REPEAT_NUMBER) / REPEAT_NUMBER + 1;
      },
      staleTime: 60 * 1000,
      gcTime: 300 * 1000,
    });

  // 반환 받은 ref를 통해 화면에 닿았는지 체크하는 hook
  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });

  /**
   * 화면의 하단에 닿으면 inView 값이 true가 됩니다.
   * 이때, 패칭 중인 데이터(isFetching)가 없고 다음에 불러올 데이터가 있으면(hasNextPage)
   * fetchNextPage를 호출합니다.
   */
  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage]);

  const moreList = useMemo(() => (data ? data.pages.flatMap((page) => page) : []), [data]);

  if (isError) {
    return "에러 처리 해라!!";
  }

  return (
    <S.MoreList>
      {data &&
        moreList.map((list) => (
          <li key={list.id}>
            <ListCard
              isRecruit={true}
              isLiked={true}
              likeCount={10}
              title={`${order}${list.id}`}
              content={`${order}${list.id}`}
              totalTime={10000}
              distance={100}
              thumbnailURL="test"
              address="테스트"
              style={{ marginBottom: "2rem" }}
            />
          </li>
        ))}
      {isFetchingNextPage ? (
        <ListCardSkeleton repeat={REPEAT_NUMBER} />
      ) : (
        <S.ScrollObserver ref={ref} />
      )}
    </S.MoreList>
  );
};

export default MoreListView;
