"use client";

// TODO - 추후 모든 Tailwind 마이그레이션 작업후 use client 제거
import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";

import { LogDetailCard } from "@/components";
import { convertMeter, convertSeconds } from "@/lib/utils";
import { PostListItemResponse } from "@/types/Response/Post";

import Link from "next/link";

interface WalkListItemProps {
  isEmpty: boolean;
  title: string;
  walkList: PostListItemResponse[];
  url: string;
}

const WalkListDisplay = ({ isEmpty, title, walkList, url }: WalkListItemProps) => {
  return (
    <section className="mt-8 select-none px-6">
      <article className="mb-4 flex items-center justify-between">
        <h3 style={{ fontSize: FONT_SIZE.LARGE, fontWeight: FONT_WEIGHT.BOLD }}>{title}</h3>
        <Link
          href={url}
          title={`${title} 더보기`}
          style={{ fontWeight: `${FONT_WEIGHT.MEDIUM}`, color: "#909090" }}
        >
          더보기
        </Link>
      </article>
      {isEmpty ? (
        <div className="mx-auto my-0 flex min-h-48 items-center justify-center text-gray-300">
          산책로 목록이 비어있어요
        </div>
      ) : (
        <ul className="flex gap-8 overflow-x-auto overflow-y-hidden scrollbar-hide">
          {walkList.map(
            ({ id, title, content, thumbnailUrl, distance, totalTime, address, likeCount }) => (
              <li key={id}>
                <Link href={`/post/${id}`}>
                  <LogDetailCard
                    title={title}
                    content={content}
                    thumbnailUrl={thumbnailUrl}
                    distance={convertMeter(distance)}
                    totalTime={convertSeconds(totalTime)}
                    isLikeLayout={true}
                    address={address}
                    likeCount={likeCount}
                  />
                </Link>
              </li>
            ),
          )}
        </ul>
      )}
    </section>
  );
};

export default WalkListDisplay;
