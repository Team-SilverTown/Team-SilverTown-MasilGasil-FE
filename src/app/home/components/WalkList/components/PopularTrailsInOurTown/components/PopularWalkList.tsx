import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

import { getPopularTrailsInOurTown } from "@/lib/api/home/client";
import { POST_KEY } from "@/lib/api/queryKeys";

import { convertMeter, convertSeconds } from "@/utils";

import { UserAddressType } from "@/types/OriginDataType/Location";

import { HomeDetailCardSkeleton } from "@/components/skeletons";
import { LogDetailCard } from "@/components";

import * as S from "./PopularWalkList.styles";

interface PopularTrailsInOurTownListProps {
  userAddress: UserAddressType;
}

const PopularWalkList = ({ userAddress }: PopularTrailsInOurTownListProps) => {
  const { data: PopularTrailsInOurTown } = useQuery({
    queryKey: [POST_KEY.GET_MORE_LIST],
    queryFn: () => getPopularTrailsInOurTown(userAddress),
    enabled: !!userAddress.depth1,
  });

  if (!PopularTrailsInOurTown) {
    return <HomeDetailCardSkeleton />;
  }

  return (
    <ul className={S.WalkListContainer}>
      {PopularTrailsInOurTown.isEmpty ? (
        <div className={S.NoWalkRecordMessage}>산책 기록이 존재하지 않습니다.</div>
      ) : (
        PopularTrailsInOurTown?.contents.map((list) => (
          <li key={list.id}>
            <Link href={`/post/${list.id}`}>
              <LogDetailCard
                title={list.title}
                content={list.content}
                thumbnailUrl={list.thumbnailUrl}
                distance={convertMeter(list.distance)}
                totalTime={convertSeconds(list.totalTime)}
              />
            </Link>
          </li>
        ))
      )}
    </ul>
  );
};

export default PopularWalkList;
