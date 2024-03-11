import Image from "next/image";
import * as S from "./DiaryItem.styles";
import { useRouter } from "next/navigation";
import { MasilsByPeriod } from "@/types/Response";
import { Location } from "@/components/icons";
import Theme from "@/styles/theme";
import useTheme from "@/lib/hooks/useTheme";

const DiaryItem = ({ masil }: { masil: MasilsByPeriod; key?: number | string }) => {
  const { id, address, content, thumbnailUrl, distance, totalTime, calories } = masil;
  const formattedAddress = `${address.depth1} ${address.depth2} ${address.depth3} ${address.depth4}`;
  const formattedStatistics = `${distance}m ∙ ${totalTime}s ∙ ${calories}kcal`;

  const route = useRouter();
  const theme = useTheme();

  const handleClickItem = () => {
    route.push(`/log/${id}`);
  };

  return (
    <S.Layout onClick={handleClickItem}>
      <S.ThumbnailContainer>
        <Image
          src={thumbnailUrl}
          alt="masilThumbnail"
          width={100}
          height={100}
        />
      </S.ThumbnailContainer>
      <S.ContentContainer>
        <S.Title>{content ? content : "내 산책기록"}</S.Title>
        <S.TextContainer>
          <S.SubText>{formattedAddress}</S.SubText>
          <S.SubText>{formattedStatistics}</S.SubText>
        </S.TextContainer>
      </S.ContentContainer>
    </S.Layout>
  );
};

export default DiaryItem;
