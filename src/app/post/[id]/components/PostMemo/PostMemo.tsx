import * as S from "./PostMemo.styles";

import Avatar from "@/components/Avatar/Avatar";
import { Heart, Location, ViewIcon } from "@/components/icons";
import { getUserInfo } from "@/lib/api/User/client";
import { USER_KEY } from "@/lib/api/queryKeys";
import { calculateWalkingCalories, convertMeter, convertSeconds } from "@/lib/utils";
import { UserInfoType } from "@/types/Response";
import { PostDetailResponse } from "@/types/Response/Post";
import { useQuery } from "@tanstack/react-query";

import { useLikeMutation } from "./hooks";

interface PostMemoProps {
  userInfo: UserInfoType;
  postData: PostDetailResponse;
}

const PostMemo = ({ userInfo, postData }: PostMemoProps) => {
  const {
    id,
    authorId,
    authorName,
    distance,
    totalTime,
    content,
    title,
    depth1,
    depth2,
    likeCount,
    viewCount,
    isLiked,
  } = postData;

  const { isUserInfoCheck, calories } = calculateWalkingCalories({ userInfo, distance });

  const { data: authorData } = useQuery({
    queryKey: [USER_KEY.USER_INFO, authorId],
    queryFn: () => getUserInfo(String(authorId)),
  });

  const { isLike, likes, handleClickLike } = useLikeMutation({ id, isLiked, likeCount });

  if (!authorData) {
    return;
  }

  return (
    <>
      <S.PostMemoTitle>{title}</S.PostMemoTitle>
      <S.PostMemoInfo>
        <S.PostMemoProfile>
          <Avatar
            src={authorData.profileImg}
            userId={String(authorId)}
          />
          <span>{authorName}</span>
        </S.PostMemoProfile>
        <S.PostMemoLocation>
          <Location /> {depth1} {depth2}
        </S.PostMemoLocation>
      </S.PostMemoInfo>
      <S.PostMemoWalkInfo>
        <li>
          <strong>산책 거리</strong>
          <span>{convertMeter(distance)}</span>
        </li>
        <li>
          <strong>소요 시간</strong>
          <span>{convertSeconds(totalTime)}</span>
        </li>
        {isUserInfoCheck && (
          <li>
            <strong>칼로리 소모</strong>
            <span>{calories}kcal</span>
          </li>
        )}
      </S.PostMemoWalkInfo>
      <S.PostMemoContent>{content}</S.PostMemoContent>
      <S.PostMemoBottomInfo>
        <S.PostMemoLike
          onClick={handleClickLike}
          $isLiked={isLike}
        >
          <Heart />
          {likes}
        </S.PostMemoLike>
        <S.PostMemoViewCount>
          <ViewIcon />
          {viewCount}
        </S.PostMemoViewCount>
      </S.PostMemoBottomInfo>
    </>
  );
};

export default PostMemo;
