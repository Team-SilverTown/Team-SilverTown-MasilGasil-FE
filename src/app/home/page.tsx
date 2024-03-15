import dynamic from "next/dynamic";
import { HomeSkeleton } from "@/components/skeletons";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { getPopularWalkingTrails } from "@/lib/api/home/server";
import { getMe, getUserProfile } from "@/lib/api/User/server";

const Home = async () => {
  const HomeView = dynamic(() => import("./Home.view"), {
    loading: () => <HomeSkeleton />,
  });

  const session = await getServerSession(authOptions);

  const popularWalkingTrails = await getPopularWalkingTrails(session?.serviceToken!);
  const user = await getMe(session?.serviceToken!);

  if (!user || !popularWalkingTrails) {
    return;
  }

  const userInfo = await getUserProfile(user.userId);

  if (!userInfo) {
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
