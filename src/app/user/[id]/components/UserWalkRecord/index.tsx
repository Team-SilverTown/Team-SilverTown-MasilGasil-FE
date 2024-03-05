"use client";

import { UserInfoType } from "../../Mypage.types";
import * as S from "./UserWalkRecord.styles";
import { convertMeter } from "@/utils";
import useCalculateCalories from "@/lib/hooks/useCalculateCalories";

interface UserWalkRecordProps {
  totalWalkDistance: number;
  totalWalkCount: number;
  userInfo: UserInfoType;
}

const UserWalkRecord = ({ totalWalkDistance, totalWalkCount, userInfo }: UserWalkRecordProps) => {
  const { isUserInfoCheck, calories } = useCalculateCalories({ userInfo, totalWalkDistance });

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
