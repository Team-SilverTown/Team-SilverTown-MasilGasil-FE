import { PostMoreListResponse } from "@/types/Response/Post";
import MyLikeWalkingTrails from "./components/MyLikeWalkingTrails/MyLikeWalkingTrails";
import PopularTrailsInOurTown from "./components/PopularTrailsInOurTown/PopularTrailsInOurTown";
import PopularWalkingTrails from "./components/PopularWalkingTrails/PopularWalkingTrails";

import * as S from "./WalkList.styles";

interface WalkListProps {
  MyLikeWalkingTrailsList: PostMoreListResponse;
  PopularWalkingTrailsList: PostMoreListResponse;
}

const WalkList = ({ MyLikeWalkingTrailsList, PopularWalkingTrailsList }: WalkListProps) => {
  return (
    <>
      <PopularTrailsInOurTown />
      {PopularWalkingTrailsList.isEmpty ? (
        <div className={S.NoWalkRecordMessage}>산책 기록이 존재하지 않습니다.</div>
      ) : (
        <PopularWalkingTrails PopularWalkingTrailsList={PopularWalkingTrailsList.contents} />
      )}
      {MyLikeWalkingTrailsList.isEmpty ? (
        <div className={S.NoWalkRecordMessage}>산책 기록이 존재하지 않습니다.</div>
      ) : (
        <MyLikeWalkingTrails MyLikeWalkingTrailsList={MyLikeWalkingTrailsList.contents} />
      )}
    </>
  );
};

export default WalkList;
