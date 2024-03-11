import { calculateWalkingCalories, convertMeter, convertSeconds } from "@/utils";
import { PostDetailResponse } from "@/types/Response/Post";
import Avatar from "@/components/Avatar/Avatar";
import { Location } from "@/components/icons";
import { UserDummyType } from "../../Post.types";
import * as S from "./PostMemo.styles";

interface PostMemoProps {
  userInfo: UserDummyType;
  postData: PostDetailResponse;
}

const PostMemo = ({ userInfo, postData }: PostMemoProps) => {
  const { distance, totalTime, content, title, depth1, depth2 } = postData;
  const { isUserInfoCheck, calories } = calculateWalkingCalories({ userInfo, distance });

  return (
    <>
      <S.PostMemoTitle>{title}</S.PostMemoTitle>
      <S.PostMemoInfo>
        <S.PostMemoProfile>
          <Avatar /> <span>닉네임</span>
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
    </>
  );
};

export default PostMemo;
