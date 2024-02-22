"use client";

import React, { useEffect, useMemo } from "react";
import { throttle } from "lodash";
import * as S from "./MoreList.styles";
import Skeleton from "./Skeleton/Skeleton";
import { ListCard } from "@/components";
import { REPEAT_NUMBER } from "./MoreList.constants";
import { useInView } from "react-intersection-observer";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { Dummy } from "./MoreList.types";
import fetchMoreList from "./lib/fetchMoreList";

interface MoreListViewProps {
  keyword: string;
}

const MoreListView = ({ keyword }: MoreListViewProps) => {
  console.log(keyword);
  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, isPending, isError } =
    useInfiniteQuery<Dummy[], Object, InfiniteData<Dummy[]>, [_1: string, _2: string], number>({
      queryKey: ["moreList", keyword],
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

  const throttledFetchNextPage = useMemo(
    () =>
      throttle(fetchNextPage, 500, {
        trailing: false,
      }),
    [],
  );

  /**
   * 화면의 하단에 닿으면 inView 값이 true가 됩니다.
   * 이때, 패칭 중인 데이터(isFetching)가 없고 다음에 불러올 데이터가 있으면(hasNextPage)
   * throttledFetchNextPage 함수를 통해 fetchNextPage를 호출합니다.
   * 여기서 throttle을 사용하지 않으면 데이터를 두 번씩 호출하는 문제가 있어서 throttle을 사용했습니다.
   */
  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && throttledFetchNextPage();
    }
  }, [inView, isFetching, hasNextPage]);

  const moreList = useMemo(() => (data ? data.pages.flatMap((page) => page) : []), [data]);

  if (isError) {
    return "에러 처리 해라!!";
  }

  if (isPending) {
    return <Skeleton repeat={REPEAT_NUMBER} />;
  }

  return (
    <S.MoreList>
      {data &&
        moreList.map((list) => (
          <div key={list.id}>
            <ListCard
              isRecruit={true}
              isLiked={true}
              likeCount={Math.round(1200 * Math.random())}
              title={`타이틀${list.id}`}
              content={`내용${list.id}`}
              totalTime={10000 * Math.random()}
              distance={100 * Math.random()}
              thumbnailURL=""
              address="테스트"
              style={{ marginBottom: "2rem" }}
            />
          </div>
        ))}
      {isFetchingNextPage ? (
        <Skeleton repeat={REPEAT_NUMBER} />
      ) : (
        <div
          ref={ref}
          style={{ height: 50 }}
        />
      )}
    </S.MoreList>
  );
};

export default MoreListView;
