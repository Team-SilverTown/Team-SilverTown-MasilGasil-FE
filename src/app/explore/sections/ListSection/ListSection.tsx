import React, { CSSProperties, memo, useCallback, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { List as VList, AutoSizer, InfiniteLoader } from "react-virtualized";

import { ListCard } from "@/components";
import { PostListItem } from "@/types/OriginDataType/Post";
import parseLocationObject from "@/utils/parseLocation";
import { useRouter } from "next/navigation";
import LoadingDots from "@/components/LoadingDots";

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

  if (id === "mate") {
    return (
      <div
        id={id}
        className="w-full h-full"
      >
        <div className="flex justify-center">
          <span className="font-medium text-medium">준비중입니다.</span>
        </div>
      </div>
    );
  }

  if (data && fetchNextPage) {
    // If there are more items to be loaded then add an extra row to hold a loading indicator.
    const rowCount = hasNextPage ? data.length + 1 : data.length;
    // Only load 1 page of items at a time.
    // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
    const loadMoreRows = isFetchingNextPage ? () => {} : fetchNextPage;
    // Every row is loaded except for our loading indicator row.
    const isRowLoaded = ({ index }: { index: number }) => !hasNextPage || index < data.length;

    const rowRenderer = useCallback(
      ({ key, index, style }: any) => {
        const item = data[index];

        let content;

        if (!isRowLoaded({ index })) {
          content = <LoadingDots />;
        } else {
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

    return (
      <div
        id={id}
        className="w-full h-full"
      >
        {data && data.length > 0 && (
          <>
            <AutoSizer>
              {({ height, width }) => (
                <InfiniteLoader
                  isRowLoaded={isRowLoaded}
                  // @ts-ignore
                  loadMoreRows={loadMoreRows}
                  rowCount={rowCount}
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

        {(!data || data.length <= 0) && (
          <div className="flex justify-center">
            <span className="font-medium text-medium">해당 지역에 대한 검색 결과가 없어요.</span>
          </div>
        )}
      </div>
    );
  }
});

export default ListSection;
