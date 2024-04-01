import { WALK_LIST } from "@/app/home/Home.constants";
import { PostListItemResponse } from "@/types/Response/Post";

import WalkListDisplay from "../WalkListDisplay/WalkListDisplay";

interface MyLikeWalkingTrailsProps {
  MyLikeWalkingTrailsList: PostListItemResponse[];
  isEmpty: boolean;
}

const MyLikeWalkingTrails = ({ MyLikeWalkingTrailsList, isEmpty }: MyLikeWalkingTrailsProps) => {
  return (
    <WalkListDisplay
      title={WALK_LIST.LIKE_TRAILS}
      walkList={MyLikeWalkingTrailsList}
      isEmpty={isEmpty}
      url="/more?keyword=my_like&order=latest"
    />
  );
};

export default MyLikeWalkingTrails;
