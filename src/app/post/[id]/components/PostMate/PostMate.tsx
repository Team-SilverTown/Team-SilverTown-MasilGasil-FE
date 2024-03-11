import Link from "next/link";
import { MateDummyType } from "../../Post.types";
import PostMateCard from "../PostMateCard/PostMateCard";
import * as S from "./PostMate.styles";

interface PostMateProps {
  mateData: MateDummyType[];
}

const PostMate = ({ mateData }: PostMateProps) => {
  return (
    <S.PostMateList>
      {mateData.map(({ id, authorProfileUrl, authorNickname, content, gatherAt, capacity }) => (
        <li key={id}>
          <Link
            href={`/mate/${id}`}
            title=""
          >
            <PostMateCard
              profileImage={authorProfileUrl}
              nickName={authorNickname}
              content={content}
              date={gatherAt}
              capacity={capacity}
              isRecruit={true}
            />
          </Link>
        </li>
      ))}
    </S.PostMateList>
  );
};

export default PostMate;
