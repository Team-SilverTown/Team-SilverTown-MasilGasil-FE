import Link from "next/link";
import { MateDummyContents } from "../../Post.types";
import MateCard from "@/components/MateCard";
import * as S from "./PostMate.styles";

interface PostMateProps {
  mateData: MateDummyContents[];
}

const PostMate = ({ mateData }: PostMateProps) => {
  return (
    <S.PostMateList>
      {mateData.map(
        ({ id, authorProfileUrl, authorNickname, title, gatheringAt, capacity, status }) => (
          <li key={id}>
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
        ),
      )}
    </S.PostMateList>
  );
};

export default PostMate;
