"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { convertMeter, convertSeconds, convertDateToYearMonthDay } from "@/utils";
import { LogDetailCard, LogSimpleCard } from "@/components";
import { MeResponse } from "@/types/Response";
import { MasilsListType, PostsListType } from "../../MyPage.types";
import * as S from "./MyRecordList.styles";

interface MyRecordListProps {
  title: string;
  urlLink: string;
  recordList: MasilsListType[] | PostsListType[];
  type: "Masils" | "Posts";
  userInfo: MeResponse;
}

const MyRecordList = ({ title, urlLink, recordList, type, userInfo }: MyRecordListProps) => {
  const router = useRouter();

  return (
    <S.BorderContainer>
      <S.BorderTitleSection>
        <h3>{title}</h3>
        <Link
          href={urlLink}
          title={title}
        >
          더 보기
        </Link>
      </S.BorderTitleSection>
      <S.BorderContentSection>
        <S.BorderContentListWrapper>
          {type === "Masils" &&
            (recordList as MasilsListType[]).map(
              ({ thumbnailUrl, depth1, depth2, distance, totalTime, startedAt, id }) => (
                <li key={id}>
                  <LogSimpleCard
                    thumbnailUrl={thumbnailUrl}
                    depth1={depth1}
                    depth2={depth2}
                    distance={convertMeter(distance)}
                    totalTime={convertSeconds(totalTime)}
                    startedAt={convertDateToYearMonthDay(startedAt)}
                    onClick={() => router.push(`/log/${id}`)}
                  />
                </li>
              ),
            )}

          {type === "Posts" &&
            (recordList as PostsListType[]).map(
              ({ title, content, thumbnailUrl, distance, totalTime, likeCount, id }) => (
                <li key={id}>
                  <LogDetailCard
                    title={title}
                    content={content}
                    thumbnailUrl={thumbnailUrl}
                    distance={convertMeter(distance)}
                    totalTime={convertSeconds(totalTime)}
                    totalDistance={distance}
                    likeCount={likeCount}
                    isLiked={true}
                    isLikeLayout={true}
                    isSettingLayout={true}
                    userInfo={userInfo}
                    onDetailClick={() => router.push(`/post/${id}`)}
                    onLikeClick={(event) => {
                      event.stopPropagation();
                      console.log("like 클릭 !!");
                    }}
                  />
                </li>
              ),
            )}

          {recordList.length === 0 && (
            <S.EmptyAlert>
              <strong>산책로가 비어있어요.</strong>
            </S.EmptyAlert>
          )}
        </S.BorderContentListWrapper>
      </S.BorderContentSection>
    </S.BorderContainer>
  );
};

export default MyRecordList;
