"use client";

import { Fragment, useEffect, useMemo } from "react";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { throttle } from "lodash";
import * as S from "./MoreList.styles";
import { getListRecommends } from "./MoreList.controller";
import { Dummy } from "./MoreList.types";
import Skeleton from "./Skeleton/Skeleton";
import { ListCard } from "@/components";

const MoreListView = () => {
  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, isPending, isError } =
    useInfiniteQuery<Dummy[], Object, InfiniteData<Dummy[]>, [_1: string, _2: string], number>({
      queryKey: ["moreList", "recommends"],
      queryFn: getListRecommends,
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPage) => (allPage.length * 5) / 5 + 1,
      staleTime: 60 * 1000,
      gcTime: 300 * 1000,
    });

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

  if (isError) {
    return "에러 처리!!";
  }

  /**
   * 초기 대기중 상태일 때 스켈레톤 레이아웃 보여주는 코드
   */

  if (isPending) {
    return (
      <S.MoreListLayout>
        <Skeleton repeat={5} />
      </S.MoreListLayout>
    );
  }

  return (
    <S.MoreListLayout>
      <S.MoreListFilter>
        <span>최신순</span>
        <span>인기순</span>
      </S.MoreListFilter>
      <S.MoreListContainer>
        {data?.pages.map((page, index) => (
          <Fragment>
            {page.map((list) => (
              <Fragment>
                <ListCard
                  isRecruit={true}
                  isLiked={true}
                  likeCount={Math.round(1200 * Math.random())}
                  title={`타이틀${list.id}`}
                  content={`내용${list.id}`}
                  totalTime={10000 * Math.random()}
                  distance={10000 * Math.random()}
                  thumbnailURL="https://github.com/Team-SilverTown/Team-SilverTown-MasilGasil-FE/assets/114329713/71d9e550-9196-4539-b014-aadd5ebdea53"
                  address="테스트"
                  style={{ marginBottom: "2rem" }}
                />
              </Fragment>
            ))}
          </Fragment>
        ))}
        {isFetchingNextPage ? (
          <Skeleton repeat={5} />
        ) : (
          <div
            ref={ref}
            style={{ height: 50 }}
          />
        )}
      </S.MoreListContainer>
    </S.MoreListLayout>
  );
};

export default MoreListView;
