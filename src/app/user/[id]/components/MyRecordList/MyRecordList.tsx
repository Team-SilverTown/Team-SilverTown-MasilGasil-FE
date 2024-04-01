"use client";

import * as S from "./MyRecordList.styles";

import { LogDetailCard, LogSimpleCard } from "@/components";
import { convertDateToYearMonthDay, convertMeter, convertSeconds } from "@/lib/utils";
import { PostListItem } from "@/types/OriginDataType/Post";
import { ProfileResponse, RecentMasil } from "@/types/Response";

import Link from "next/link";
import { useRouter } from "next/navigation";

interface MyRecordListProps {
  title: string;
  urlLink: string;
  recordList: RecentMasil[] | PostListItem[];
  type: "Masils" | "Posts";
  userInfo?: ProfileResponse;
  key?: string | number;
}

const MyRecordList = ({ title, urlLink, recordList, type }: MyRecordListProps) => {
  const router = useRouter();

  return (
    <S.BorderContainer>
      <S.BorderTitleSection>
        <h3>{title}</h3>
        <Link
          href={urlLink}
          title={title}
          scroll={false}
        >
          더보기
        </Link>
      </S.BorderTitleSection>
      <S.BorderContentSection>
        <S.BorderContentListWrapper>
          {type === "Masils" &&
            (recordList as RecentMasil[]).map(({ thumbnailUrl, startedAt, id }) => (
              <li key={id}>
                <LogSimpleCard
                  thumbnailUrl={thumbnailUrl}
                  startedAt={convertDateToYearMonthDay(startedAt)}
                  onClick={() => router.push(`/log/${id}`)}
                />
              </li>
            ))}

          {type === "Posts" &&
            (recordList as PostListItem[]).map(
              ({ title, content, thumbnailUrl, distance, totalTime, id }) => (
                <li key={id}>
                  <LogDetailCard
                    title={title}
                    content={content}
                    thumbnailUrl={thumbnailUrl}
                    distance={convertMeter(distance)}
                    totalTime={convertSeconds(totalTime)}
                    totalDistance={distance}
                    onDetailClick={() => router.push(`/post/${id}`)}
                  />
                </li>
              ),
            )}

          {recordList.length === 0 && <S.EmptyAlert>산책로 목록이 비어있어요</S.EmptyAlert>}
        </S.BorderContentListWrapper>
      </S.BorderContentSection>
    </S.BorderContainer>
  );
};

export default MyRecordList;
