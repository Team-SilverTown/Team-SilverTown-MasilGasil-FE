import Avatar from "@/components/Avatar/Avatar";
import * as S from "./PostMateCard.styles";

interface PostMateCardProps {
  isRecruit: boolean;
}

const PostMateCard = ({ isRecruit }: PostMateCardProps) => {
  return (
    <S.PostMateCardLayout>
      <S.PostMateCardInfo>
        <Avatar /> <span>닉네임</span>
      </S.PostMateCardInfo>
      <S.PostMateCardContent>빡쌔게 달리실 속도광 모십니다. 인간 카트 ㄱㄱ</S.PostMateCardContent>
      <S.PostMateCardDate>2024/02/04 오후 8시 예정 • 4명 희망</S.PostMateCardDate>
      <S.PostMateRecruit $isRecruit={isRecruit}>
        {isRecruit ? "모집중" : "마감됨"}
      </S.PostMateRecruit>
    </S.PostMateCardLayout>
  );
};

export default PostMateCard;
