import { FONT_SIZE } from "@/styles/theme";
import * as S from "./MonthlyStatistics.styles";
import Divider from "@/components/Divider/Divider";

interface MonthlyStatisticsProps {
  month: number | undefined;
}

const MonthlyStatistics = ({ month }: MonthlyStatisticsProps) => {
  return (
    <S.Layout>
      <S.Container>
        {month && (
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
                <S.AccentText>104.2km</S.AccentText>
              </S.SectionItem>
              <S.SectionItem>
                <S.Text>총 거리</S.Text>
                <S.AccentText>104.2km</S.AccentText>
              </S.SectionItem>
              <S.SectionItem>
                <S.Text>총 거리</S.Text>
                <S.AccentText>104.2km</S.AccentText>
              </S.SectionItem>
            </S.Section>
          </>
        )}
      </S.Container>
    </S.Layout>
  );
};

export default MonthlyStatistics;
