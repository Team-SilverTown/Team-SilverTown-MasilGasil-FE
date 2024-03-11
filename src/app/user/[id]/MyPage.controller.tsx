import { USER_DUMMY_DATA } from "@/app/home/Home.constants";
import { RECORDLIST_DUMMY_DATA } from "./MyPage.constants";
import MypageView from "./MyPage.view";

interface MyPageControllerProps {
  userId: number;
}

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
