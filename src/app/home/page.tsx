import dynamic from "next/dynamic";
import { HomeSkeleton } from "@/components/skeletons";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { getPopularWalkingTrails } from "@/lib/api/home/server";
import { getMe } from "@/lib/api/User/server";

const Home = async () => {
  const HomeView = dynamic(() => import("./Home.view"), {
    loading: () => <HomeSkeleton />,
  });

  const session = await getServerSession(authOptions);

  const popularWalkingTrails = await getPopularWalkingTrails(session?.serviceToken!);
  const userInfo = await getMe(session?.serviceToken!);

  if (!userInfo || !popularWalkingTrails) {
    return;
  }

  return (
    <HomeView
      MyLikeWalkingTrailsList={popularWalkingTrails}
      PopularWalkingTrailsList={popularWalkingTrails}
      userInfo={userInfo}
    />
  );
};

export default Home;
