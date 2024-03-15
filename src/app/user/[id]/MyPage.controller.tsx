import { RECORDLIST_DUMMY_DATA, USER_PROFILE_EXCEPTION } from "./MyPage.constants";
import MypageView from "./MyPage.view";
import { getUserProfile } from "@/lib/api/User/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { getRecentMasils } from "@/lib/api/masil/server";
import { getRecentPostsById } from "@/lib/api/Post/server";
import { MyRecordListType } from "./MyPage.types";

interface MyPageControllerProps {
  userId: number;
}

/**
 * @TODO
 * 1. Query Param으로부터 userId를 받아옴
 * 2. userId에 대한 get 요청을 보내 userInfo 데이터를 받아옴
 * 3. userId에 대한 관련 get 요청을 보내 PostData를 받아옴
 */

/**
 * 내 통계
 * 내 산책
 * - 최근에 다녀온 산책
 * - 작성한 산책로
 * - 좋아요한 산책로
 */

const MyPageController = async ({ userId }: MyPageControllerProps) => {
  const session = await getServerSession(authOptions);

  const userProfile = await getUserProfile(userId);
  const recentMasils = await getRecentMasils(session?.serviceToken!);
  const recentPosts = await getRecentPostsById(session?.serviceToken!, userId);

  console.log(recentMasils);
  console.log(recentPosts);

  const boardLists: MyRecordListType[] = [
    {
      title: "최근에 다녀온 산책",
      urlLink: "/diary/test",
      recordList: recentMasils !== undefined ? recentMasils.masils : [],
      type: "Masils",
      isEmpty: recentMasils?.isEmpty,
    },
    {
      title: "내가 작성한 산책로",
      urlLink: "/more?keyword=my_post&order=latest",
      recordList: recentPosts !== undefined ? recentPosts.contents : [],
      type: "Posts",
      isEmpty: recentPosts?.isEmpty,
    },
    {
      title: "내가 좋아하는 산책로",
      urlLink: "/more?keyword=my_like&order=latest",
      recordList: [],
      type: "Posts",
      isEmpty: true,
    },
  ];

  return (
    <MypageView
      userId={userId}
      userInfo={userProfile !== undefined ? userProfile : USER_PROFILE_EXCEPTION}
      boardList={boardLists}
    />
  );
};

export default MyPageController;
