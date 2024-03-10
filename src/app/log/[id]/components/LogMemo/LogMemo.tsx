import { Location } from "@/components/icons";
import { calculateWalkingCalories, convertMeter, convertSeconds } from "@/utils";
import { MeResponse } from "@/types/Response";
import * as S from "./LogMemo.styles";

interface LogMemoProps {
  distance: number;
  totalTime: number;
  userInfo: MeResponse;
}

const LogMemo = ({ distance, totalTime, userInfo }: LogMemoProps) => {
  const { isUserInfoCheck, calories } = calculateWalkingCalories({ userInfo, distance });

  return (
    <>
      <S.LogMemoLocation>
        <Location /> 경남 진주시 호탄동
      </S.LogMemoLocation>
      <S.LogMemoWalkInfo>
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
      </S.LogMemoWalkInfo>
      <S.LogMemoContent>
        진주시에서 가장 큰 강이 남강변을 따라 걷는 산책로에요. 주변을 걷다보면 수달을 만날 수도
        있답니다. 행운의 수달을 만나면 소원을 빌어보아요! #데이트코스 #가볍게걷기좋은 #사계절 #수달
      </S.LogMemoContent>
      <S.LogMemoDate>2024-02-25 오후 11:11</S.LogMemoDate>
    </>
  );
};

export default LogMemo;
