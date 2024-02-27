import Link from "next/link";
import * as S from "./MyRecordList.styles";
import { LogDetailCard, LogSimpleCard } from "@/components";
import { MasilsListType, PostsListType } from "../../Mypage.types";

type MyRecordListType = "Masils" | "Posts";

export interface MyRecordListProps {
  key: string | number;
  title: string;
  urlLink: string;
  recordList: MasilsListType[] | PostsListType[];
  type: MyRecordListType;
}

const MyRecordList = ({ key, title, urlLink, recordList, type }: MyRecordListProps) => {
  return (
    <S.BorderContainer>
      <S.BorderTitleSection>
        <h3>{title}</h3>
        <Link href={urlLink}>더 보기</Link>
      </S.BorderTitleSection>
      <S.BorderContentSection>
        <S.BorderContentListWrapper>
          {type === "Masils"
            ? (recordList as MasilsListType[]).map(
                ({
                  thumbnail_url,
                  region_1depth_name,
                  region_2depth_name,
                  distance,
                  total_time,
                  created_at,
                  id,
                }) => (
                  <LogSimpleCard
                    thumbnail={thumbnail_url}
                    location_1={region_1depth_name}
                    location_2={region_2depth_name}
                    distance={distance}
                    total_time={total_time}
                    created_at={created_at}
                    onClick={() => console.log(`${id}로 이동~~`)}
                  />
                ),
              )
            : (recordList as PostsListType[]).map(
                ({ title, content, thumbnail, distance, total_time, like_count }) => (
                  <LogDetailCard
                    title={title}
                    content={content}
                    thumbnailURL={thumbnail}
                    distance={distance}
                    totalTime={total_time}
                    likeCount={like_count}
                    isLiked={true}
                    isLikeLayout={true}
                    isSettingLayout={true}
                    onDetailClick={() => console.log("Detail View 클릭!")}
                    onLikeClick={(event) => {
                      event.stopPropagation();
                      console.log("like 클릭 !!");
                    }}
                  />
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
