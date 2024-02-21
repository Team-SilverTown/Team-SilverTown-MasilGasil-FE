"use client";

import { useEffect, useMemo } from "react";
import { throttle } from "lodash";
import * as S from "./MoreList.styles";
import Skeleton from "./Skeleton/Skeleton";
import { ListCard } from "@/components";
import useMoreListModel from "./MoreList.model";
import { SORT_DATA, SORT_TAB } from "./MoreList.constants";
import { TopNavigator } from "@/components/navigators/TopNavagtor";
import { GoBackButton } from "@/components/navigators/TopNavagtor/components";

const MoreListView = () => {
  const { sortTab, setSortTab, infinityQuery, inViewResponse, listInfo } = useMoreListModel();
  const { isFilter } = listInfo;

  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, isPending, isError } =
    infinityQuery;
  const { ref, inView } = inViewResponse;

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

  const handleFilterToggle = (event: React.MouseEvent<HTMLElement>) => {
    if (event.currentTarget.title === SORT_TAB.LATEST) {
      setSortTab(SORT_TAB.LATEST);
    } else {
      setSortTab(SORT_TAB.POPULAR);
    }
  };

  return (
    <>
      <TopNavigator
        leftChildren={<GoBackButton />}
        title={listInfo.name}
      />
      <S.MoreListLayout>
        {isFilter && (
          <S.MoreListFilter>
            {SORT_DATA.map(({ title, keyword }, index) => (
              <button
                key={index}
                type="button"
                className={sortTab === keyword ? "selected" : ""}
                title={keyword}
                onClick={handleFilterToggle}
              >
                {title}
              </button>
            ))}
          </S.MoreListFilter>
        )}
        <S.MoreListContainer>
          {data?.pages.map((page, index) => (
            <div key={index}>
              {page.map((list) => (
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
            </div>
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
    </>
  );
};

export default MoreListView;
