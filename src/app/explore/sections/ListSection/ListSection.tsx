"use client";

import React, { memo, useCallback } from "react";
import { AutoSizer, InfiniteLoader, List as VList } from "react-virtualized";

import { ListCard } from "@/components";
import { PostCardsSkeleton } from "@/components/skeletons";
import parseLocationObject from "@/lib/utils/parseLocation";
import { PostListItem } from "@/types/OriginDataType/Post";

import { useRouter } from "next/navigation";

interface ListSectionProps {
  id: "post" | "mate";
  data?: PostListItem[];
  fetchNextPage?: Function;
  isFetchingNextPage?: boolean;
  hasNextPage?: boolean;
}

const ListSection = memo(function List({
  id,
  data,
  fetchNextPage,
  isFetchingNextPage,
  hasNextPage,
}: ListSectionProps) {
  const router = useRouter();

  const cardClickHandler = (id: number) => {
    router.push(`/post/${id}`);
  };

  const rowRenderer = useCallback(
    ({ key, index, style }: any) => {
      let content;

      if (data && data[index]) {
        const item = data[index];

        content = (
          <ListCard
            isRecruit={item.hasMate}
            isLiked={item.liked}
            likeCount={item.likeCount}
            title={item.title}
            content={item.content}
            totalTime={item.totalTime}
            distance={item.distance}
            thumbnailUrl={item.thumbnailUrl}
            address={parseLocationObject(item.address) ?? ""}
            onCardClickHandler={() => cardClickHandler(item.id)}
          />
        );
      } else {
        content = <PostCardsSkeleton />;
      }

      return (
        <div
          key={key}
          style={style}
          className="p-4"
        >
          {content}
        </div>
      );
    },
    [data, cardClickHandler],
  );

  if (id === "mate") {
    return (
      <div
        id={id}
        className="h-full w-full"
      >
        <div className="flex justify-center">
          <span className="text-medium font-medium">준비중입니다.</span>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div
        id={id}
        className="h-full w-full overflow-hidden"
      >
        <div className="space-y-8 p-4">
          <PostCardsSkeleton />
        </div>
      </div>
    );
  }

  if (data) {
    const loadNextPage = () => {
      if (!isFetchingNextPage && hasNextPage && fetchNextPage) {
        fetchNextPage();
      }
    };

    return (
      <div
        id={id}
        className="h-full w-full"
      >
        {data && data.length > 0 && (
          <>
            <AutoSizer>
              {({ height, width }) => (
                <InfiniteLoader
                  isRowLoaded={({ index }) => !!data[index]}
                  // @ts-ignore
                  loadMoreRows={loadNextPage}
                  rowCount={data ? data.length + 1 : 0}
                  threshold={1}
                >
                  {({ onRowsRendered, registerChild }) => (
                    <VList
                      ref={registerChild}
                      onRowsRendered={onRowsRendered}
                      width={width}
                      height={height}
                      rowCount={data.length}
                      rowHeight={250 + 20} // card height + padding vertical 20
                      rowRenderer={rowRenderer}
                      className="scrollbar-hide"
                      style={{ paddingBottom: "2rem" }}
                    />
                  )}
                </InfiniteLoader>
              )}
            </AutoSizer>
          </>
        )}

        {!data ||
          (data.length <= 0 && (
            <div className="flex justify-center">
              <span className="text-medium font-medium text-gray-300">
                해당 지역에 대한 검색 결과가 없어요
              </span>
            </div>
          ))}
      </div>
    );
  }
});

export default ListSection;
