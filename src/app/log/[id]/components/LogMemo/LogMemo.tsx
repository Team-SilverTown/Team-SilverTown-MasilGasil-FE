import * as S from "./LogMemo.styles";

import { Location } from "@/components/icons";
import { calculateWalkingCalories, convertMeter, convertSeconds } from "@/lib/utils";
import convertFormatDate from "@/lib/utils/convertFormatDate";
import { MasilDetailResponse, UserInfoType } from "@/types/Response";

interface LogMemoProps {
  masilData: MasilDetailResponse;
  userInfo: UserInfoType;
}

const LogMemo = ({ masilData, userInfo }: LogMemoProps) => {
  const { distance, totalTime, depth1, depth2, startedAt, content } = masilData;
  const { isUserInfoCheck, calories } = calculateWalkingCalories({ userInfo, distance });

  const liStyle = "flex-1 text-center";
  const strongStyle =
    "rounded-[2rem] bg-green_500 px-[1rem] py-[0.5rem] text-mini font-regular text-white";
  const spanStyle = "mt-[1.5rem] block";

  return (
    <>
      <article className="flex items-center text-medium">
        <Location className="mr-[0.5rem]" /> {depth1} {depth2}
      </article>
      <ul className="mx-0 my-[2rem] flex justify-between">
        <li className={liStyle}>
          <strong className={strongStyle}>산책 거리</strong>
          <span className={spanStyle}>{convertMeter(distance)}</span>
        </li>
        <li className={liStyle}>
          <strong className={strongStyle}>소요 시간</strong>
          <span className={spanStyle}>{convertSeconds(totalTime)}</span>
        </li>
        {isUserInfoCheck && (
          <li className={liStyle}>
            <strong className={strongStyle}>칼로리 소모</strong>
            <span className={spanStyle}>{calories}kcal</span>
          </li>
        )}
      </ul>
      <article className="text-basic leading-[1.6]">{content}</article>
      <article className="mt-[2rem] pb-[7rem] text-right text-mini text-gray_300">
        {convertFormatDate(startedAt)}
      </article>
    </>
  );
};

export default LogMemo;
