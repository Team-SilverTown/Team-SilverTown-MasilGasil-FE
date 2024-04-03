import { WALK_LIST } from "@/app/home/Home.constants";
import { PostListItemResponse } from "@/types/Response/Post";

import WalkListDisplay from "../WalkListDisplay/WalkListDisplay";

interface PopularWalkingTrailsProps {
  PopularWalkingTrailsList: PostListItemResponse[];
  isEmpty: boolean;
}

const PopularWalkingTrails = ({ PopularWalkingTrailsList, isEmpty }: PopularWalkingTrailsProps) => {
  return (
    <WalkListDisplay
      title={WALK_LIST.POPULAR_TRAILS}
      walkList={PopularWalkingTrailsList}
      isEmpty={isEmpty}
      url="/more?keyword=total_popular&order=popular"
    />
  );
};

export default PopularWalkingTrails;
