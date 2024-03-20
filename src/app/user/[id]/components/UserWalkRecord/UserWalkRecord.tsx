import { convertMeter } from "@/utils";
import { ProfileResponse } from "@/types/Response";
import * as S from "./UserWalkRecord.styles";

interface UserWalkRecordProps {
  userInfo: ProfileResponse;
}

const UserWalkRecord = ({ userInfo }: UserWalkRecordProps) => {
  const { totalCalories, totalCount, totalDistance } = userInfo;
  return (
    <S.Layout>
      <S.Container>
        <S.Section>
          <S.SectionItem>
            <S.Text>총 거리</S.Text>
            <S.AccentText>{totalDistance ? convertMeter(totalDistance) : "0 m"}</S.AccentText>
          </S.SectionItem>
          <S.ColDivider />
          <S.SectionItem>
            <S.Text>총 산책 횟수</S.Text>
            <S.AccentText>{totalCount ? totalCount : "0 "}회</S.AccentText>
          </S.SectionItem>
          <S.ColDivider />
          <S.SectionItem>
            <S.Text>총 소모 칼로리</S.Text>
            <S.AccentText>{totalCalories ? totalCalories : "0 "}kcal</S.AccentText>
          </S.SectionItem>
        </S.Section>
      </S.Container>
    </S.Layout>
  );
};

export default UserWalkRecord;
