"use client";

import Link from "next/link";

import { convertMeter, convertSeconds } from "@/utils";

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
        <Link href={url}>
          <More />
        </Link>
      </article>
      {isEmpty ? (
        <div className={S.NoWalkRecordMessage}>산책 기록이 존재하지 않습니다.</div>
      ) : (
        <ul className={S.WalkListContainer}>
          {walkList.map(({ id, title, content, thumbnailUrl, distance, totalTime, address }) => (
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
                />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default WalkListDisplay;
