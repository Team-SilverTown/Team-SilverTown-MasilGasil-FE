import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getRecentPostsById } from "@/lib/api/Post/server";
import { getMe, getUserProfile } from "@/lib/api/User/server";
import { getRecentMasils } from "@/lib/api/masil/server";

import { USER_PROFILE_EXCEPTION } from "./MyPage.constants";
import { MyRecordListType } from "./MyPage.types";
import MypageView from "./MyPage.view";

import { getServerSession } from "next-auth";

interface MyPageControllerProps {
  userId: number;
}

const MyPageController = async ({ userId }: MyPageControllerProps) => {
  const session = await getServerSession(authOptions);
  const me = session?.serviceToken ? await getMe() : undefined;
  const isMe = me && me.userId == userId;

  const userProfile = await getUserProfile(userId);
  const recentMasils = await getRecentMasils(session?.serviceToken!);
  const recentPosts = await getRecentPostsById(session?.serviceToken!, userId);

  const isPrivateUser =
    !isMe &&
    userProfile?.totalCalories === null &&
    userProfile?.totalCount === null &&
    userProfile?.totalDistance === null;

  const boardLists: MyRecordListType[] = [
    {
      title: "최근에 다녀온 산책",
      urlLink: `/diary/${userId}`,
      recordList: recentMasils !== undefined ? recentMasils.masils : [],
      type: "Masils",
      isEmpty: recentMasils?.isEmpty,
      visible: "Private",
    },
    {
      title: "작성한 산책로",
      urlLink: `/more?keyword=my_post&order=latest&userId=${userId}`,
      recordList: recentPosts !== undefined ? recentPosts.contents : [],
      type: "Posts",
      isEmpty: recentPosts?.isEmpty,
      visible: "Public",
    },
  ];

  return (
    <MypageView
      userId={userId}
      userInfo={userProfile !== undefined ? userProfile : USER_PROFILE_EXCEPTION}
      boardList={boardLists}
      isMe={isMe}
      isPrivateUser={isPrivateUser}
    />
  );
};

export default MyPageController;
