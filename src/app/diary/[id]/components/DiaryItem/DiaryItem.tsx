import * as S from "./DiaryItem.styles";

import useTheme from "@/lib/hooks/useTheme";
import { convertMeter, convertSeconds } from "@/lib/utils";
import { MasilsByPeriod } from "@/types/Response";

import Image from "next/image";
import { useRouter } from "next/navigation";

const DiaryItem = ({ masil }: { masil: MasilsByPeriod; key?: number | string }) => {
  const { id, address, content, thumbnailUrl, distance, totalTime, calories } = masil;
  const formattedAddress = `${address.depth1} ${address.depth2} ${address.depth3} ${address.depth4}`;
  const formattedStatistics = `${convertMeter(distance)} ∙ ${convertSeconds(totalTime)} ∙ ${calories}kcal`;

  const route = useRouter();
  const theme = useTheme();

  const handleClickItem = () => {
    route.push(`/log/${id}`);
  };

  return (
    <S.Layout onClick={handleClickItem}>
      <Image
        src={thumbnailUrl}
        alt="masilThumbnail"
        width={100}
        height={100}
        style={{ borderRadius: "1rem 0rem 0rem 1rem" }}
      />
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
