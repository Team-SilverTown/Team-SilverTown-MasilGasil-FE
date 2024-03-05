import { masilProps } from "../MasilDiarySheet/MasilDiarySheet";
import * as S from "./DiaryItem.styles";

// thumbnailUrl, memo, location, time, length, kcal

const DiaryItem = ({ masil }: { masil: masilProps }) => {
  const handleClickItem = () => {
    //TODO: 해당 로그 id의 디테일페이지로 이동
  };

  return (
    <S.Layout onClick={handleClickItem}>
      <S.ThumbnailContainer></S.ThumbnailContainer>
      <S.ContentContainer>
        <S.SubTitle>위치정보</S.SubTitle>
        <S.Title>메모내용</S.Title>
        <S.TextContainer>1시간1분 | 4.2km | 422kcal</S.TextContainer>
      </S.ContentContainer>
    </S.Layout>
  );
};

export default DiaryItem;
