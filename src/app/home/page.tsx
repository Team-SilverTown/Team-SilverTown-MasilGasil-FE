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

  let userInfo = undefined;
  let popularWalkingTrails = undefined;

  if (session) {
    popularWalkingTrails = await getPopularWalkingTrails(session.serviceToken!);
    userInfo = await getMe().then((user) => {
      if (!user) {
        return;
      }

      return getUserProfile(user.userId);
    });
  }

  return (
    <HomeView
      PopularWalkingTrailsList={popularWalkingTrails}
      userInfo={userInfo}
    />
  );
};

export default Home;
