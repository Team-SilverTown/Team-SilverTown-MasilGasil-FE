"use client";

import Link from "next/link";
import { PostsDataType } from "../../Home.types";
import { LogDetailCard } from "@/components";
import * as S from "./WalkList.styles";
import { convertMeter, convertSeconds } from "@/utils";
import { MeResponse } from "@/types/Response";

interface WalkListProps {
  walkList: PostsDataType[];
  userInfo: MeResponse;
}

const WalkList = ({ walkList, userInfo }: WalkListProps) => {
  return (
    <ul className={S.WalkListContainer}>
      {walkList.map((list) => (
        <li key={list.id}>
          <Link
            href={`/posts/${list.id}`}
            style={{ display: "flex" }}
          >
            <LogDetailCard
              title={list.title}
              content={list.content}
              thumbnailUrl={list.thumbnailUrl}
              distance={convertMeter(list.distance)}
              totalTime={convertSeconds(list.totalTime)}
              totalDistance={list.distance}
              userInfo={userInfo}
              likeCount={1000}
              isLiked={true}
              isLikeLayout={true}
              isSettingLayout={true}
              onDetailClick={() => {}}
            />
          </Link>
        </li>
      ))}
      {walkList.length === 0 && (
        <li className={S.NoWalkRecordMessage}>산책 기록이 존재하지 않습니다.</li>
      )}
    </ul>
  );
};

export default WalkList;
