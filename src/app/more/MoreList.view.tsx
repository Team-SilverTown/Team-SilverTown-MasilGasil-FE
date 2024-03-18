"use client";

import React, { useCallback, useRef } from "react";

import { ListCard } from "@/components";

import { PostListItem } from "@/types/OriginDataType/Post";
import { useRouter } from "next/navigation";
import parseLocationObject from "@/utils/parseLocation";
import { List as VList, AutoSizer, InfiniteLoader } from "react-virtualized";
import { PostCardSkeleton, PostCardsSkeleton } from "@/components/skeletons";

interface MoreListViewProps {
  keyword: string;
  order: string;
  listData: PostListItem[];
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

  if (listData) {
    const loadNextPage = () => {
      if (!isFetchingNextPage && hasNextPage && fetchNextPage) {
        fetchNextPage();
      }
    };

    const rowRenderer = useCallback(
      ({ key, index, style }: any) => {
        const item = listData[index];

        let content;

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

    return (
      <div className="w-full h-full">
        {listData && listData.length > 0 && (
          <>
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
          </>
        )}

        {(!listData || listData.length <= 0) && (
          <div className="p-4 space-y-8">
            <PostCardsSkeleton />
          </div>
        )}
      </div>
    );
  }
};

export default MoreListView;
