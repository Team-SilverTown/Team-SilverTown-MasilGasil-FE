import * as S from "./MateDetail.styles";

import { TopNavigator } from "@/components/navigators/TopNavigator";
import { CommonContainerTailwind } from "@/styles/GlobalStyle";
import Divider from "@/components/Divider/Divider";
import { MateEvaluation, MateInfo, MateMembers } from "./components";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";
import { MatePost, UserEvaluationType } from "./MateDetail.types";

interface MateDetailProps {
  postId: string;
  matePost: MatePost;
  authorEvaluation: UserEvaluationType;
}

const MateDetail = ({ postId, matePost, authorEvaluation }: MateDetailProps) => {
  const { members, authorNickname } = matePost;

  return (
    <>
      <TopNavigator
        title="메이트 모집"
        leftChildren={<GoBackButton />}
      />
      <section className={CommonContainerTailwind}>
        <article className={S.MateDetailLayout}>
          <MateInfo
            postId={postId}
            mateData={matePost}
          />

          <Divider />

          <MateEvaluation
            authorEvaluation={authorEvaluation}
            nickName={authorNickname}
          />

          <Divider />

          <MateMembers members={members} />
        </article>
      </section>
    </>
  );
};

export default MateDetail;
