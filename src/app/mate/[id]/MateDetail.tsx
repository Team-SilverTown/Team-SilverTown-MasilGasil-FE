import { TopNavigator } from "@/components/navigators/TopNavigator";
import { CommonContainerTailwind } from "@/styles/GlobalStyle";
import { MateDetailLayout } from "./MateDetail.styles";
import Divider from "@/components/Divider/Divider";

interface MateDetailProps {}

const MateDetail = ({}: MateDetailProps) => {
  return (
    <>
      <TopNavigator title="메이트 모집" />
      <section className={CommonContainerTailwind}>
        <article className={MateDetailLayout}>
          <Divider />
          <Divider />
          <Divider />
        </article>
      </section>
    </>
  );
};

export default MateDetail;
