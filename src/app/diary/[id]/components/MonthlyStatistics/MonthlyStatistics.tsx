import { MasilsByPeriodResponse } from "@/types/Response";
import * as S from "./MonthlyStatistics.styles";
import { convertMeter } from "@/lib/utils";

interface MonthlyStatisticsProps {
  month: number | undefined;
  masils: MasilsByPeriodResponse | undefined;
}

const MonthlyStatistics = ({ month, masils }: MonthlyStatisticsProps) => {
  return (
    <S.Layout>
      <S.Container>
        {month !== undefined && (
          <>
            <S.Header>
              <S.Title>{month + 1}월의 산책 기록</S.Title>
              <S.Text>
                총
                <S.AccentText>
                  {masils && masils?.masils.length > 0 ? ` ${masils?.masils.length}일 ` : " 0일 "}
                </S.AccentText>
                산책했어요
              </S.Text>
            </S.Header>
            <S.Section>
              <S.SectionItem>
                <S.Text>총 거리</S.Text>
                <S.AccentTitle>
                  {masils?.totalDistance ? convertMeter(masils?.totalDistance) : "0 m"}
                </S.AccentTitle>
              </S.SectionItem>
              <S.ColDivider />
              <S.SectionItem>
                <S.Text>산책 횟수</S.Text>
                <S.AccentTitle>{masils?.totalCounts ? masils?.totalCounts : "0 "}회</S.AccentTitle>
              </S.SectionItem>
              <S.ColDivider />
              <S.SectionItem>
                <S.Text>소모 칼로리</S.Text>
                <S.AccentTitle>
                  {masils?.totalCalories ? masils?.totalCalories : "0 "}kcal
                </S.AccentTitle>
              </S.SectionItem>
            </S.Section>
          </>
        )}
      </S.Container>
    </S.Layout>
  );
};

export default MonthlyStatistics;
