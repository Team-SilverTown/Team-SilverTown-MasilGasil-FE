import { calculateWalkingCalories, convertMeter } from "@/utils";
import { UserInfoType } from "../../MyPage.types";
import * as S from "./UserWalkRecord.styles";

interface UserWalkRecordProps {
  totalWalkDistance: number;
  totalWalkCount: number;
  userInfo: UserInfoType;
}

const UserWalkRecord = ({ totalWalkDistance, totalWalkCount, userInfo }: UserWalkRecordProps) => {
  const { isUserInfoCheck, calories } = calculateWalkingCalories({
    userInfo,
    distance: totalWalkDistance,
  });

  return (
    <S.UserWalkRecordContainer>
      <h3>나의 총 산책 기록</h3>
      <S.UserWalkRecordList>
        <li>
          <strong>거리</strong>
          <div className="walkItemInfo">
            <span>{convertMeter(totalWalkDistance)}</span>
          </div>
        </li>
        <li>
          <strong>총 산책 횟수</strong>
          <div className="walkItemInfo">
            <span>{totalWalkCount}번</span>
          </div>
        </li>
        {isUserInfoCheck && (
          <li>
            <strong>총 소모 열량</strong>
            <div className="walkItemInfo">
              <span>{calories}kacl</span>
            </div>
          </li>
        )}
      </S.UserWalkRecordList>
    </S.UserWalkRecordContainer>
  );
};

export default UserWalkRecord;
