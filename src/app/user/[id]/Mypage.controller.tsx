import Link from "next/link";
import { RECORDLIST_DUMMY_DATA, USERINFO_DUMMY_DATA } from "./Mypage.constants";
import MypageView from "./MyPage.view";
import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";
import Setting from "@/components/icons/Setting";

const MypageController = () => {
  return (
    <>
      <TopNavigator
        leftChildren={<GoBackButton />}
        title="프로필"
        rightChildren={
          <Link
            href="/user/:id/setting"
            title="설정 페이지 바로가기"
            style={{ marginRight: "1.5rem" }}
          >
            <Setting />
          </Link>
        }
      />
      <MypageView
        boardList={RECORDLIST_DUMMY_DATA}
        userInfo={USERINFO_DUMMY_DATA}
      />
      ;
    </>
  );
};

export default MypageController;
