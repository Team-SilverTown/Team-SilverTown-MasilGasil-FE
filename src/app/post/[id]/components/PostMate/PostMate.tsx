import Link from "next/link";
import MateCard from "@/components/MateCard";
import * as S from "./PostMate.styles";
import { MateDetailResponse } from "@/types/Response";

interface PostMateProps {
  mateData: MateDetailResponse;
}

const PostMate = ({ mateData }: PostMateProps) => {
  const { id, authorProfileUrl, authorNickname, title, gatheringAt, capacity, status } = mateData;

  return (
    <S.PostMateList>
      <li>
        <Link
          href={`/mate/${id}`}
          title={title}
        >
          <MateCard
            profileImage={authorProfileUrl}
            nickName={authorNickname}
            title={title}
            date={gatheringAt}
            capacity={capacity}
            status={status}
          />
        </Link>
      </li>
    </S.PostMateList>
  );
};

export default PostMate;
