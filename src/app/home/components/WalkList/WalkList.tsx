import { PostMoreListResponse } from "@/types/Response/Post";

import MyLikeWalkingTrails from "./components/MyLikeWalkingTrails/MyLikeWalkingTrails";
import PopularTrailsInOurTown from "./components/PopularTrailsInOurTown/PopularTrailsInOurTown";
import PopularWalkingTrails from "./components/PopularWalkingTrails/PopularWalkingTrails";

interface WalkListProps {
  MyLikeWalkingTrailsList: PostMoreListResponse;
  PopularWalkingTrailsList: PostMoreListResponse;
}

const WalkList = ({ MyLikeWalkingTrailsList, PopularWalkingTrailsList }: WalkListProps) => {
  return (
    <>
      <PopularTrailsInOurTown />

      <PopularWalkingTrails
        PopularWalkingTrailsList={PopularWalkingTrailsList.contents}
        isEmpty={PopularWalkingTrailsList.isEmpty}
      />

      {/* 
      추후 기능 추가

      <MyLikeWalkingTrails
        MyLikeWalkingTrailsList={MyLikeWalkingTrailsList.contents}
        isEmpty={MyLikeWalkingTrailsList.isEmpty}
      /> 
      
      */}
    </>
  );
};

export default WalkList;
