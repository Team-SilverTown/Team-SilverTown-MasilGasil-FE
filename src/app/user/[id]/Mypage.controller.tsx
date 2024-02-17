"use client";

import MypageView from "./MyPage.view";
import useMypageModel from "./Mypage.model";

const MypageController = () => {
  const { boardList } = useMypageModel();
  return <MypageView boardList={boardList} />;
};

export default MypageController;
