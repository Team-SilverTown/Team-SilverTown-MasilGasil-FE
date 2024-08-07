"use client";

import React, { useCallback } from "react";
import { AutoSizer, InfiniteLoader, List as VList } from "react-virtualized";

import { ListCard } from "@/components";
import { PostCardsSkeleton } from "@/components/skeletons";
import parseLocationObject from "@/lib/utils/parseLocation";
import { PostListItem } from "@/types/OriginDataType/Post";

import { useRouter } from "next/navigation";

interface MoreListViewProps {
  keyword: string;
  order: string;
  listData?: PostListItem[];
  fetchNextPage?: Function;
  isFetchingNextPage?: boolean;
  hasNextPage?: boolean;
}

const MoreListView = ({
  listData,
  fetchNextPage,
  isFetchingNextPage,
  hasNextPage,
}: MoreListViewProps) => {
  const router = useRouter();

  const cardClickHandler = (id: number) => {
    router.push(`/post/${id}`);
  };

  const rowRenderer = useCallback(
    ({ key, index, style }: any) => {
      let content;

      if (listData) {
        const item = listData[index];

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
    [listData, cardClickHandler],
  );

  if (!listData) {
    return (
      <div className="h-full w-full overflow-hidden">
        <div className="space-y-8 p-4">
          <PostCardsSkeleton />
        </div>
      </div>
    );
  }

  const loadNextPage = () => {
    if (!isFetchingNextPage && hasNextPage && fetchNextPage) {
      fetchNextPage();
    }
  };

  return (
    <div className="h-full w-full">
      {listData && listData.length > 0 && (
        <AutoSizer>
          {({ height, width }) => (
            <InfiniteLoader
              isRowLoaded={({ index }) => !!listData[index]}
              // @ts-ignore
              loadMoreRows={loadNextPage}
              rowCount={listData ? listData.length + 1 : 0}
              threshold={1}
            >
              {({ onRowsRendered, registerChild }) => (
                <VList
                  ref={registerChild}
                  onRowsRendered={onRowsRendered}
                  width={width}
                  height={height}
                  rowCount={listData.length}
                  rowHeight={250 + 20} // card height + padding vertical 20
                  rowRenderer={rowRenderer}
                  className="scrollbar-hide"
                  style={{ paddingBottom: "2rem" }}
                />
              )}
            </InfiniteLoader>
          )}
        </AutoSizer>
      )}

      {listData.length <= 0 && (
        <div className="flex h-full w-full select-none items-center justify-center">
          <span className="text-medium font-medium text-gray-300">산책로 목록이 비어있어요</span>
        </div>
      )}
    </div>
  );
};

export default MoreListView;
