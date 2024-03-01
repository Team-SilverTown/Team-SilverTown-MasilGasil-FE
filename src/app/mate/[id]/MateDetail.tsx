import * as S from "./MateDetail.styles";

import { TopNavigator } from "@/components/navigators/TopNavigator";
import { CommonContainerTailwind } from "@/styles/GlobalStyle";
import Divider from "@/components/Divider/Divider";
import { MateEvaluation, MateInfo } from "./components";

interface MateDetailProps {}

const MateDetail = ({}: MateDetailProps) => {
  return (
    <>
      <TopNavigator title="메이트 모집" />
      <section className={CommonContainerTailwind}>
        <article className={S.MateDetailLayout}>
          <MateInfo />

          <Divider />

          <MateEvaluation />

          <Divider />
        </article>
      </section>
    </>
  );
};

export default MateDetail;
