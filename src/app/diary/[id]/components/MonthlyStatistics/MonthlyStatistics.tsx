import * as S from "./MonthlyStatistics.styles";

interface MonthlyStatisticsProps {
  month: number | undefined;
}

const MonthlyStatistics = ({ month }: MonthlyStatisticsProps) => {
  return (
    <S.Layout>
      <S.Container>
        {month !== undefined && (
          <>
            <S.Header>
              <S.Title>{month + 1}월의 산책 기록</S.Title>
              <S.Text>
                총 <S.AccentText>30일</S.AccentText> 산책했어요
              </S.Text>
            </S.Header>
            <S.Section>
              <S.SectionItem>
                <S.Text>총 거리</S.Text>
                <S.AccentTitle>104.2km</S.AccentTitle>
              </S.SectionItem>
              <S.ColDivider />
              <S.SectionItem>
                <S.Text>총 횟수</S.Text>
                <S.AccentTitle>80회</S.AccentTitle>
              </S.SectionItem>
              <S.ColDivider />
              <S.SectionItem>
                <S.Text>소모 칼로리</S.Text>
                <S.AccentTitle>1040kcal</S.AccentTitle>
              </S.SectionItem>
            </S.Section>
          </>
        )}
      </S.Container>
    </S.Layout>
  );
};

export default MonthlyStatistics;
