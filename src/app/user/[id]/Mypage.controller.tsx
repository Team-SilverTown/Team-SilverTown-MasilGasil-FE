"use client";

import MypageView from "./MyPage.view";
import { MASILS_DUMMY_DATA, POSTS_DUMMY_DATA } from "./Mypage.constants";
import { MyRecordListProps } from "./components/MyRecordList";

const MypageController = () => {
  const RECORDLIST_DUMMY_DATA: MyRecordListProps[] = [
    {
      title: "내 최근 산책 기록",
      urlLink: "my_log",
      recordList: MASILS_DUMMY_DATA, // 이 값은 추후 API 데이터로 변경
      type: "Masils",
    },
    {
      title: "내가 작성한 산책로",
      urlLink: "my_post",
      recordList: POSTS_DUMMY_DATA,
      type: "Posts",
    },
    {
      title: "내가 좋아하는 산책로",
      urlLink: "my_like",
      recordList: POSTS_DUMMY_DATA,
      type: "Posts",
    },
  ];

  return <MypageView RECORDLIST_DUMMY_DATA={RECORDLIST_DUMMY_DATA} />;
};

export default MypageController;
