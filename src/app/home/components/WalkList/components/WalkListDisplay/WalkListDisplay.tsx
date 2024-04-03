import Link from "next/link";

import { convertMeter, convertSeconds } from "@/lib/utils";

import { PostListItemResponse } from "@/types/Response/Post";

import { LogDetailCard } from "@/components";

import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import * as S from "./WalkListDisplay.styles";

interface WalkListItemProps {
  isEmpty: boolean;
  title: string;
  walkList: PostListItemResponse[];
  url: string;
}

const WalkListDisplay = ({ isEmpty, title, walkList, url }: WalkListItemProps) => {
  return (
    <section className={S.WalkListSection}>
      <article className={S.HomeWalkListArticle}>
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
        <div className={S.NoWalkRecordMessage}>산책로 목록이 비어있어요</div>
      ) : (
        <ul className={S.WalkListContainer}>
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
