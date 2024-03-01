import * as S from "./MyWalkRecord.styles";

const MyWalkRecord = () => {
  return (
    <S.MyWalkRecordContainer>
      <h3>000님, 먹어서 응원해요!</h3>
      <S.MyWalkRecordList>
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
      </S.MyWalkRecordList>
    </S.MyWalkRecordContainer>
  );
};

export default MyWalkRecord;
