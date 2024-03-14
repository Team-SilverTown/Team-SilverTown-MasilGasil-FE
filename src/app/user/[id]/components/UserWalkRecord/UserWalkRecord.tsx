import { calculateWalkingCalories, convertMeter } from "@/utils";
import { MeResponse } from "@/types/Response";
import * as S from "./UserWalkRecord.styles";

interface UserWalkRecordProps {
  totalWalkDistance: number;
  totalWalkCount: number;
  userInfo: MeResponse;
}

const UserWalkRecord = ({ totalWalkDistance, totalWalkCount, userInfo }: UserWalkRecordProps) => {
  const { isUserInfoCheck, calories } = calculateWalkingCalories({
    userInfo,
    distance: totalWalkDistance,
  });

  return (
    <S.Layout>
      <S.Container>
        <S.Section>
          <S.SectionItem>
            <S.Text>총 거리</S.Text>
            <S.AccentTitle>
              {totalWalkDistance ? convertMeter(totalWalkDistance) : "- m"}
            </S.AccentTitle>
          </S.SectionItem>
          <S.ColDivider />
          <S.SectionItem>
            <S.Text>산책 횟수</S.Text>
            <S.AccentTitle>{totalWalkCount ? totalWalkCount : "- "}회</S.AccentTitle>
          </S.SectionItem>
          <S.ColDivider />
          {isUserInfoCheck && (
            <S.SectionItem>
              <S.Text>소모 칼로리</S.Text>
              <S.AccentTitle>{calories ? calories : "- "}kcal</S.AccentTitle>
            </S.SectionItem>
          )}
        </S.Section>
      </S.Container>
    </S.Layout>
  );
};

export default UserWalkRecord;
