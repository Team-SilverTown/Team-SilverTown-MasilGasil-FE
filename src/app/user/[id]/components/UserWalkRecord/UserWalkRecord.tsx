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
            <S.AccentText>
              {totalWalkDistance ? convertMeter(totalWalkDistance) : "- m"}
            </S.AccentText>
          </S.SectionItem>
          <S.ColDivider />
          <S.SectionItem>
            <S.Text>산책 횟수</S.Text>
            <S.AccentText>{totalWalkCount ? totalWalkCount : "- "}회</S.AccentText>
          </S.SectionItem>
          <S.ColDivider />
          {isUserInfoCheck && (
            <S.SectionItem>
              <S.Text>소모 칼로리</S.Text>
              <S.AccentText>{calories ? calories : "- "}kcal</S.AccentText>
            </S.SectionItem>
          )}
        </S.Section>
      </S.Container>
    </S.Layout>
  );
};

export default UserWalkRecord;
