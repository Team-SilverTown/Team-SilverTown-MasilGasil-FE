import S from "./MyWalkRecord.module.css";

import { convertMeter } from "@/lib/utils";
import { ProfileResponse } from "@/types/Response";

interface MyWalkRecordProps {
  userInfo: ProfileResponse;
}

const MyWalkRecord = ({ userInfo }: MyWalkRecordProps) => {
  const { nickname, totalDistance, totalCount, totalCalories } = userInfo;

  return (
    <article className={S.MyWalkRecordContainer}>
      <h3>{nickname}님, 산책을 시작해 보세요!</h3>
      <ul className={S.MyWalkRecordList}>
        <li>
          <strong>총 거리</strong>
          <span>{convertMeter(totalDistance)}</span>
        </li>
        <li>
          <strong>산책 횟수</strong>
          <span>{totalCount ?? 0}번</span>
        </li>
        <li>
          <strong>총 소모 열량</strong>
          <span>{totalCalories ?? 0}kcal</span>
        </li>
      </ul>
    </article>
  );
};

export default MyWalkRecord;
