import { Location } from "@/components/icons";
import { calculateWalkingCalories, convertMeter, convertSeconds } from "@/utils";
import { MasilDetailResponse } from "@/types/Response";
import { UserInfoType } from "../../Log.types";
import * as S from "./LogMemo.styles";
import convertFormatDate from "@/utils/convertFormatDate";

interface LogMemoProps {
  masilData: MasilDetailResponse;
  userInfo: UserInfoType;
}

const LogMemo = ({ masilData, userInfo }: LogMemoProps) => {
  const { distance, totalTime, depth1, depth2, startedAt, content } = masilData;
  const { isUserInfoCheck, calories } = calculateWalkingCalories({ userInfo, distance });

  return (
    <>
      <S.LogMemoLocation>
        <Location /> {depth1} {depth2}
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
      <S.LogMemoContent>{content}</S.LogMemoContent>
      <S.LogMemoDate>{convertFormatDate(startedAt)}</S.LogMemoDate>
    </>
  );
};

export default LogMemo;
