import Image from "next/image";
import { masilProps } from "../MasilDiarySheet/MasilDiarySheet";
import * as S from "./DiaryItem.styles";
import { useRouter } from "next/navigation";

// thumbnailUrl, memo, location, time, length, kcal

const DiaryItem = ({ masil }: { masil: masilProps; key?: number | string }) => {
  const { id, address, content, thumbnailUrl, distance, totalTime, calorie } = masil;

  const route = useRouter();

  const handleClickItem = () => {
    route.push(`/log/${id}`);
  };

  return (
    <S.Layout onClick={handleClickItem}>
      <S.ThumbnailContainer>
        {/* TODO: 이미지 */}
        {/* <Image
          src={thumbnailUrl}
          alt="masilThumbnail"
          width={50}
          height={50}
        /> */}
      </S.ThumbnailContainer>
      <S.ContentContainer>
        <S.SubTitle>위치정보</S.SubTitle>
        <S.Title>메모내용메모내용메모내용메모내용메모내용메모내용메모내용</S.Title>
        <S.TextContainer>1시간1분 | 4.2km | 422kcal</S.TextContainer>
      </S.ContentContainer>
    </S.Layout>
  );
};

export default DiaryItem;
