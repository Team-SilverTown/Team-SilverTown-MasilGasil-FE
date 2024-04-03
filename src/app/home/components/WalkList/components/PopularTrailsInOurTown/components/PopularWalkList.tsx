"use client";

import { WALK_LIST } from "@/app/home/Home.constants";
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

  const { isEmpty, contents } = PopularTrailsInOurTown;

  return (
    <>
      <WalkListDisplay
        walkList={contents}
        title={WALK_LIST.POPULAR_IN_TOWN}
        isEmpty={isEmpty}
        url="/more?keyword=area_popular&order=popular"
      />
    </>
  );
};

export default PopularWalkList;
