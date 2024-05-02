import { convertMeter } from "@/lib/utils";
import { ProfileResponse } from "@/types/Response";

import { twJoin } from "tailwind-merge";

interface MyWalkRecordProps {
  userInfo: ProfileResponse;
}

const MyWalkRecord = ({ userInfo }: MyWalkRecordProps) => {
  const { nickname, totalDistance, totalCount, totalCalories } = userInfo;

  const liStyle = "flex flex-1 flex-col items-center";
  const notFirstLiStyle = "relative";
  const beforeStyle =
    "before:absolute before:left-0 before:top-0 before:inline-block before:bg-gray_100 before:content-[''] before:h-[4rem] before:w-[0.1rem]";
  const strongStyle = "mb-[0.5rem] font-bold";
  const spanStyle = "text-large font-bold text-green_300";

  return (
    <article className="mb-[3rem] rounded-[0.8rem] border-[1px] border-transparent_10 bg-white px-[1rem] py-[2.3rem] shadow-[0_2px_7.8px_0_rgba(0,0,0,0.02)]">
      <h3 className="mb-[2.3rem] flex items-center justify-center text-center text-medium font-bold">
        {nickname}님, 산책을 시작해 보세요!
      </h3>
      <ul className="flex">
        <li className={liStyle}>
          <strong className={strongStyle}>총 거리</strong>
          <span className={spanStyle}>{convertMeter(totalDistance)}</span>
        </li>

        <li className={twJoin(liStyle, notFirstLiStyle, beforeStyle)}>
          <strong className={strongStyle}>산책 횟수</strong>
          <span className={spanStyle}>{totalCount ?? 0}번</span>
        </li>

        <li className={twJoin(liStyle, notFirstLiStyle, beforeStyle)}>
          <strong className={strongStyle}>총 소모 열량</strong>
          <span className={spanStyle}>{totalCalories ?? 0}kcal</span>
        </li>
      </ul>
    </article>
  );
};

export default MyWalkRecord;
