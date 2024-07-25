"use client";

import { WALK_LIST } from "@/app/home/Home.constants";
import PostContainer from "@/app/home/components/PostContainer/PostContainer";
import Forest from "@/components/icons/home/Forest";
import { HomeWalkListSkeleton } from "@/components/skeletons";
import { getPopularTrailsInOurTown } from "@/lib/api/home/client";
import { POST_KEY } from "@/lib/api/queryKeys";
import { UserAddressType } from "@/types/OriginDataType/Location";
import { PostMoreListResponse } from "@/types/Response/Post";
import { useQuery } from "@tanstack/react-query";

import WalkListDisplay from "../../WalkListDisplay/WalkListDisplay";

interface PopularTrailsInOurTownListProps {
  userAddress: UserAddressType;
}

const PopularWalkList = ({ userAddress }: PopularTrailsInOurTownListProps) => {
  const { data: PopularTrailsInOurTown } = useQuery<unknown, unknown, PostMoreListResponse>({
    queryKey: [POST_KEY.GET_MORE_LIST],
    queryFn: () => getPopularTrailsInOurTown(userAddress),
    enabled: !!userAddress.depth1,
  });

  if (!PopularTrailsInOurTown) {
    return <HomeWalkListSkeleton />;
  }
  return (
    <>
      <PostContainer
        label="근처 인기산책로"
        icon={<Forest size={52} />}
        url="/more?keyword=area_popular&order=popular"
        data={PopularTrailsInOurTown}
      />
    </>
  );
};

export default PopularWalkList;
