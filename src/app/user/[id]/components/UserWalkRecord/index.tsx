import * as S from "./UserWalkRecord.styles";

type UserGenderInfo = "male" | "female";

interface UserWalkRecordProps {
  totalWalkDistance: number;
  totalWalkCount: number;
  exerciseIntensity?: string;
  userAge?: string;
  userWeight?: number;
  userHeight?: number;
  gender?: UserGenderInfo;
}

const UserWalkRecord = ({
  totalWalkDistance,
  totalWalkCount,
  exerciseIntensity,
}: UserWalkRecordProps) => {
  return (
    <S.UserWalkRecordContainer>
      <h3>나의 총 산책 기록</h3>
      <S.UserWalkRecordList>
        <li>
          <strong>거리</strong>
          <div className="walkItemInfo">
            <span>{totalWalkDistance}</span>
            <small>km</small>
          </div>
        </li>
        <li>
          <strong>총 산책 횟수</strong>
          <div className="walkItemInfo">
            <span>{totalWalkCount}</span>
            <small>번</small>
          </div>
        </li>
        <li>
          <strong>총 소모 열량</strong>
          <div className="walkItemInfo">
            <span>1,500</span>
            <small>kacl</small>
          </div>
        </li>
      </S.UserWalkRecordList>
    </S.UserWalkRecordContainer>
  );
};

export default UserWalkRecord;
