import { HomeSkeleton } from "@/components/skeletons";
import { getMe, getUserProfile } from "@/lib/api/User/server";
import { getPopularWalkingTrails } from "@/lib/api/home/server";

import { authOptions } from "../api/auth/[...nextauth]/options";

import { getServerSession } from "next-auth";
import dynamic from "next/dynamic";

const Home = async () => {
  const HomeView = dynamic(() => import("./Home.view"), {
    loading: () => <HomeSkeleton />,
  });

  const session = await getServerSession(authOptions);
  const popularWalkingTrails = await getPopularWalkingTrails(session?.serviceToken!);
  const userInfo = await getMe(session?.serviceToken!).then((user) => {
    if (!user) {
      return;
    }

    return getUserProfile(user.userId);
  });

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
