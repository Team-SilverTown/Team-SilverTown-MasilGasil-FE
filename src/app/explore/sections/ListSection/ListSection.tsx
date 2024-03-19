import React, { memo, useCallback } from "react";
import { List as VList, AutoSizer, InfiniteLoader } from "react-virtualized";

import { ListCard } from "@/components";
import { PostListItem } from "@/types/OriginDataType/Post";
import parseLocationObject from "@/utils/parseLocation";
import { useRouter } from "next/navigation";
import { PostCardsSkeleton } from "@/components/skeletons";

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

  if (!data) {
    return (
      <div
        id={id}
        className="w-full h-full overflow-hidden"
      >
        <div className="p-4 space-y-8">
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

    const rowRenderer = useCallback(
      ({ key, index, style }: any) => {
        const item = data[index];

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
                  isRowLoaded={({ index }) => !!data[index]}
                  // @ts-ignore
                  loadMoreRows={loadNextPage}
                  rowCount={data ? data.length + 1 : 0}
                  threshold={1}
                >
                  {({ onRowsRendered, registerChild }) => (
                    <>
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
                    </>
                  )}
                </InfiniteLoader>
              )}
            </AutoSizer>
          </>
        )}

        {data.length <= 0 && (
          <div className="flex justify-center">
            <span className="font-medium text-medium text-gray-300">
              해당 지역에 대한 검색 결과가 없어요
            </span>
          </div>
        )}
      </div>
    );
  }
});

export default ListSection;
