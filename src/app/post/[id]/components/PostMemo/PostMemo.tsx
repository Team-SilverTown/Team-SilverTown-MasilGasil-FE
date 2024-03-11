import { Location } from "@/components/icons";
import { calculateWalkingCalories, convertMeter, convertSeconds } from "@/utils";
import { MeResponse } from "@/types/Response";
import * as S from "./PostMemo.styles";
import Avatar from "@/components/Avatar/Avatar";

interface PostMemoProps {
  distance: number;
  totalTime: number;
  userInfo: MeResponse;
  address: string;
}

const PostMemo = ({ distance, totalTime, userInfo, address }: PostMemoProps) => {
  const { isUserInfoCheck, calories } = calculateWalkingCalories({ userInfo, distance });

  return (
    <>
      <S.PostMemoTitle>타이틀은 30자 이하</S.PostMemoTitle>
      <S.PostMemoInfo>
        <S.PostMemoProfile>
          <Avatar /> <span>닉네임</span>
        </S.PostMemoProfile>
        <S.PostMemoLocation>
          <Location /> {address}
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
      <S.PostMemoContent>
        진주시에서 가장 큰 강이 남강변을 따라 걷는 산책로에요. 주변을 걷다보면 수달을 만날 수도
        있답니다. 행운의 수달을 만나면 소원을 빌어보아요! #데이트코스 #가볍게걷기좋은 #사계절 #수달
      </S.PostMemoContent>
    </>
  );
};

export default PostMemo;
