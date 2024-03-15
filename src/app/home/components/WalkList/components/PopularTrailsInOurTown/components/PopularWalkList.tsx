"use client";

import { useQuery } from "@tanstack/react-query";

import { getPopularTrailsInOurTown } from "@/lib/api/home/client";
import { POST_KEY } from "@/lib/api/queryKeys";

import { WALK_LIST } from "@/app/home/Home.constants";
import { UserAddressType } from "@/types/OriginDataType/Location";

import { HomeDetailCardSkeleton } from "@/components/skeletons";

import WalkListDisplay from "../../WalkListDisplay/WalkListDisplay";
import { PostMoreListResponse } from "@/types/Response/Post";

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
    return <HomeDetailCardSkeleton />;
  }

  const { isEmpty, contents } = PopularTrailsInOurTown;

  return (
    <>
      <WalkListDisplay
        walkList={contents}
        title={WALK_LIST.POPULAR_IN_TOWN}
        isEmpty={isEmpty}
      />
    </>
  );
};

export default PopularWalkList;
