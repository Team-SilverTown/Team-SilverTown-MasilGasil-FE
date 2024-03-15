import Link from "next/link";

import { convertMeter, convertSeconds } from "@/utils";

import { PostMoreListContent } from "@/types/Response/Post";

import LogDetailCard from "@/components/LogDetailCard";
import { More } from "@/components/icons";

import { FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";
import * as S from "./PopularWalkingTrails.style";

interface PopularWalkingTrailsProps {
  PopularWalkingTrailsList: PostMoreListContent[];
}

const PopularWalkingTrails = ({ PopularWalkingTrailsList }: PopularWalkingTrailsProps) => {
  return (
    <section className={S.WalkListSection}>
      <article className={S.HomeWalkListArticle}>
        <h3 style={{ fontSize: FONT_SIZE.LARGE, fontWeight: FONT_WEIGHT.BOLD }}>
          요즘 인기 있는 전국 산책로
        </h3>
        <Link href="">
          <More />
        </Link>
      </article>
      <ul className={S.WalkListContainer}>
        {PopularWalkingTrailsList.map((list) => (
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

export default PopularWalkingTrails;
