import convertFormatDate from "@/utils/convertFormatDate";
import Avatar from "@/components/Avatar/Avatar";
import * as S from "./MateCard.styles";
interface MateCardProps {
  profileImage: string | null;
  nickName: string;
  title: string;
  date: string;
  capacity: number;
  status: "OPEN" | "CLOSED";
}

/**
 * 외부에서 Link를 통해서 이동 되는 용도로 사용 되는 컴포넌트 입니다.
 */

const MateCard = ({ profileImage, nickName, title, date, capacity, status }: MateCardProps) => {
  return (
    <S.MateCardLayout>
      <S.MateCardInfo>
        <Avatar src={profileImage} /> <span>{nickName}</span>
      </S.MateCardInfo>
      <S.MateCardContent>{title}</S.MateCardContent>
      <S.MateCardDate>
        {convertFormatDate(date)} 예정 • {capacity}명 희망
      </S.MateCardDate>
      <S.MateRecruit $status={status}>{status === "OPEN" ? "모집중" : "마감됨"}</S.MateRecruit>
    </S.MateCardLayout>
  );
};

export default MateCard;
