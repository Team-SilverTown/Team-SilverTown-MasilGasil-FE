import PostMateCard from "../PostMateCard/PostMateCard";
import * as S from "./PostMate.styles";

const PostMate = () => {
  return (
    <S.PostMateList>
      <PostMateCard isRecruit={true} />
      <PostMateCard isRecruit={false} />
      <PostMateCard isRecruit={true} />
    </S.PostMateList>
  );
};

export default PostMate;
