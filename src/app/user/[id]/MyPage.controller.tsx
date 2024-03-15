import { USER_DUMMY_DATA } from "@/app/home/Home.constants";
import { RECORDLIST_DUMMY_DATA } from "./MyPage.constants";
import MypageView from "./MyPage.view";

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

const MyPageController = ({ userId }: MyPageControllerProps) => {
  return (
    <MypageView
      userId={userId}
      userInfo={USER_DUMMY_DATA}
      boardList={RECORDLIST_DUMMY_DATA}
    />
  );
};

export default MyPageController;
