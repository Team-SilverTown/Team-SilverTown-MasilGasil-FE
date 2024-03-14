import * as S from "./MateDetail.styles";

import { TopNavigator } from "@/components/navigators/TopNavigator";
import { CommonContainerTailwind } from "@/styles/GlobalStyle";
import Divider from "@/components/Divider/Divider";
import { MateInfo, MateMap, MateMembers } from "./components";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";

import { MateDetailResponse } from "@/types/Response";

interface MateDetailProps {
  postId: string;
  mateData: MateDetailResponse;
}

const MateDetail = ({ postId, mateData }: MateDetailProps) => {
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
            mateData={mateData}
          />

          <Divider />

          <MateMap />

          {/* <MateEvaluation
            authorEvaluation={authorEvaluation}
            nickName={authorNickname}
          /> */}

          <Divider />

          {/* Todo : participants 로 교체 */}
          {/* <MateMembers members={members} /> */}
        </article>
      </section>
    </>
  );
};

export default MateDetail;
