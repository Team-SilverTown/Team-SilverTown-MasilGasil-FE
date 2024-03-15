import React, { memo, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { ListCard } from "@/components";
import { PostListItem } from "@/types/OriginDataType/Post";
import parseLocationObject from "@/utils/parseLocation";
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

  const [ref, inView] = useInView({
    rootMargin: "20%",
  });

  // console.log(hasNextPage);

  useEffect(() => {
    if (inView && !isFetchingNextPage) {
      fetchNextPage && fetchNextPage();
      console.log("inview");
    }
  }, [inView]);

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

  return (
    <div
      id={id}
      className="w-full h-full"
    >
      {data && data.length > 0 && (
        <>
          <ul className="p-4 space-y-8">
            {data.map((item) => (
              <li key={item.id}>
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
              </li>
            ))}
          </ul>
          <div
            ref={ref}
            className="w-full p-4"
          />
        </>
      )}

      {(!data || data.length <= 0) && (
        <div className="flex justify-center">
          <span className="font-medium text-medium">해당 지역에 대한 검색 결과가 없어요.</span>
        </div>
      )}
    </div>
  );
});

export default ListSection;
