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
  const { participants } = mateData;

  const acceptedUserList = participants.filter(({ status }) => status === "ACCEPTED");
  const requestedUserList = participants.filter(({ status }) => status === "REQUESTED");

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
            acceptedUserList={acceptedUserList}
            requestedUserList={requestedUserList}
          />

          <Divider />

          <MateMap mateData={mateData} />

          <Divider />

          <MateMembers
            mateData={mateData}
            acceptedUserList={acceptedUserList}
            requestUserList={requestedUserList}
          />
        </article>
      </section>
    </>
  );
};

export default MateDetail;
