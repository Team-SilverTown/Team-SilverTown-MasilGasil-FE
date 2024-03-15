import dynamic from "next/dynamic";
import { HomeSkeleton } from "@/components/skeletons";

const Home = () => {
  // 서버사이드 컴포넌트이고 데이터 패칭 작업이 없어서 로딩 여부를 알 수 없는 경우 다음과 같이
  // 스켈레톤을 보여줄 수 있습니다.
  const HomeController = dynamic(() => import("./Home.controller"), {
    loading: () => <HomeSkeleton />,
  });

  return <HomeController />;
};

export default Home;
