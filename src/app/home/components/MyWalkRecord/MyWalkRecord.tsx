import { MeResponse } from "@/types/Response";
import S from "./MyWalkRecord.module.css";

interface MyWalkRecordProps {
  userInfo: MeResponse;
}

const MyWalkRecord = ({ userInfo }: MyWalkRecordProps) => {
  const { nickname } = userInfo;

  return (
    <article className={S.MyWalkRecordContainer}>
      <h3>{nickname}님, 산책을 시작해 보세요!</h3>
      <ul className={S.MyWalkRecordList}>
        <li>
          <strong>총 거리</strong>
          <span>104.2km</span>
        </li>
        <li>
          <strong>산책 횟수</strong>
          <span>50번</span>
        </li>
        <li>
          <strong>총 소모 열량</strong>
          <span>1400kcal</span>
        </li>
      </ul>
    </article>
  );
};

export default MyWalkRecord;
