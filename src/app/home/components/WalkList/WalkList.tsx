import { LogDetailCard } from "@/components";
import { MasilsListType, PostsListType } from "../../Home.types";
import * as S from "./WalkList.styles";

interface WalkListProps {
  walkList: MasilsListType[] | PostsListType[];
}

const WalkList = ({ walkList }: WalkListProps) => {
  return (
    <S.WalkListContainer>
      {walkList.map((list) => (
        <li key={list.id}>
          <LogDetailCard
            title="오산시"
            content="내용"
            thumbnailURL="https://github.com/SeungHyune/first-script/assets/114329713/34992788-3558-40cd-940c-81f7f2b94551"
            distance="1.5km"
            totalTime="30분"
            likeCount={1000}
            isLiked={true}
            isLikeLayout={true}
            isSettingLayout={false}
            onDetailClick={() => {}}
          />
        </li>
      ))}
      {walkList.length === 0 && <div>산책로가 존재하지 않습니다.</div>}
    </S.WalkListContainer>
  );
};

export default WalkList;
