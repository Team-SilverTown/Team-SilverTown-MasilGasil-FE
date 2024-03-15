import Link from "next/link";

import { convertMeter, convertSeconds } from "@/utils";

import { PostListItemResponse } from "@/types/Response/Post";

import { More } from "@/components/icons";
import LogDetailCard from "@/components/LogDetailCard";

import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import * as S from "./MyLikeWalkingTrails.style";

interface MyLikeWalkingTrailsProps {
  MyLikeWalkingTrailsList: PostListItemResponse[];
}

const MyLikeWalkingTrails = ({ MyLikeWalkingTrailsList }: MyLikeWalkingTrailsProps) => {
  return (
    <section className={S.WalkListSection}>
      <article className={S.HomeWalkListArticle}>
        <h3 style={{ fontSize: FONT_SIZE.LARGE, fontWeight: FONT_WEIGHT.BOLD }}>
          내가 좋아하는 산책로
        </h3>
        <Link href="/more?keyword=my_like&order=latest">
          <More />
        </Link>
      </article>
      <ul className={S.WalkListContainer}>
        {MyLikeWalkingTrailsList.map((list) => (
          <li key={list.id}>
            <Link href={`/post/${list.id}`}>
              <LogDetailCard
                title={list.title}
                content={list.content}
                thumbnailUrl={list.thumbnailUrl}
                distance={convertMeter(list.distance)}
                totalTime={convertSeconds(list.totalTime)}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MyLikeWalkingTrails;
