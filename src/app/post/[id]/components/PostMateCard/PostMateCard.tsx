import convertFormatDate from "@/utils/convertFormatDate";
import Avatar from "@/components/Avatar/Avatar";
import * as S from "./PostMateCard.styles";
interface PostMateCardProps {
  profileImage: string | null;
  nickName: string;
  content: string;
  date: string;
  capacity: number;
  isRecruit: boolean;
}

const PostMateCard = ({
  profileImage,
  nickName,
  content,
  date,
  capacity,
  isRecruit,
}: PostMateCardProps) => {
  return (
    <S.PostMateCardLayout>
      <S.PostMateCardInfo>
        <Avatar src={profileImage} /> <span>{nickName}</span>
      </S.PostMateCardInfo>
      <S.PostMateCardContent>{content}</S.PostMateCardContent>
      <S.PostMateCardDate>
        {convertFormatDate(date)} 예정 • {capacity}명 희망
      </S.PostMateCardDate>
      <S.PostMateRecruit $isRecruit={isRecruit}>
        {isRecruit ? "모집중" : "마감됨"}
      </S.PostMateRecruit>
    </S.PostMateCardLayout>
  );
};

export default PostMateCard;
