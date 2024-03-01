import * as S from "./MateDetail.styles";

import { TopNavigator } from "@/components/navigators/TopNavigator";
import { CommonContainerTailwind } from "@/styles/GlobalStyle";
import Divider from "@/components/Divider/Divider";
import { MateEvaluation, MateInfo, MateMembers } from "./components";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";

interface MateDetailProps {}

const MateDetail = ({}: MateDetailProps) => {
  return (
    <>
      <TopNavigator
        title="메이트 모집"
        leftChildren={<GoBackButton />}
      />
      <section className={CommonContainerTailwind}>
        <article className={S.MateDetailLayout}>
          <MateInfo />

          <Divider />

          <MateEvaluation />

          <Divider />

          <MateMembers />
        </article>
      </section>
    </>
  );
};

export default MateDetail;
