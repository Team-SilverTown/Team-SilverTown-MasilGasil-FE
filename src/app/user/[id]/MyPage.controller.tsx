import { RECORDLIST_DUMMY_DATA, USERINFO_DUMMY_DATA } from "./MyPage.constants";
import MypageView from "./MyPage.view";

interface MyPageControllerProps {
  userId: number;
}

const MyPageController = ({ userId }: MyPageControllerProps) => {
  return (
    <MypageView
      boardList={RECORDLIST_DUMMY_DATA}
      userInfo={USERINFO_DUMMY_DATA}
      userId={userId}
    />
  );
};

export default MyPageController;
