import * as S from "./PostMemo.styles";

import Avatar from "@/components/Avatar/Avatar";
import { Heart, Location, ViewIcon } from "@/components/icons";
import { useUI } from "@/components/uiContext/UiContext";
import { fetchPostLikedToggle } from "@/lib/api/Post/client";
import { getUserInfo } from "@/lib/api/User/client";
import { POST_KEY, USER_KEY } from "@/lib/api/queryKeys";
import useAuthStore from "@/lib/stores/useAuthStore";
import { calculateWalkingCalories, convertMeter, convertSeconds } from "@/lib/utils";
import checkErrorCode from "@/lib/utils/checkErrorCode";
import { UserInfoType } from "@/types/Response";
import { PostDetailResponse } from "@/types/Response/Post";
import { useMutation, useQuery } from "@tanstack/react-query";

import { useRouter } from "next/navigation";

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
  const { setModalView, openModal } = useUI();
  const router = useRouter();
  const { isLogIn } = useAuthStore();

  const { data: authorData } = useQuery({
    queryKey: [USER_KEY.USER_INFO, authorId],
    queryFn: () => getUserInfo(String(authorId)),
  });

  const likeMutation = useMutation({
    mutationKey: [POST_KEY.LIKED_STATUS],
    mutationFn: fetchPostLikedToggle,
    onSuccess: () => {
      router.refresh();
    },
    onError: ({ message }) => {
      setModalView("ANIMATION_ALERT_VIEW");
      openModal({
        message: checkErrorCode({
          errorCode: message,
          defaultMessage: "해당 요청에 문제가 발생하였습니다.<br>잠시 후 다시 시도해주세요!",
        }),
      });
    },
  });

  if (!authorData) {
    return;
  }

  const handleClickLike = () => {
    if (!isLogIn) {
      setModalView("ACCESS_LOGIN_VIEW");
      openModal();
      return;
    }

    likeMutation.mutate({ postId: String(id), data: { isLike: !isLiked } });
  };

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
          $isLiked={isLiked}
        >
          <Heart />
          {likeCount}
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
