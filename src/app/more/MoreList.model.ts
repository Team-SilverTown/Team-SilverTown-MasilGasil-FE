"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { SEARCH_KEYWORD } from "./MoreList.constants";

const useMoreListModel = () => {
  const params = useParams();
  const { keyword } = params;

  const listInfo = SEARCH_KEYWORD.filter((list) => list.keyword === keyword)[0];

  if (!listInfo) {
    throw new Error("'keyword' 파라미터가 없습니다.");
  }

  const [sortTab, setSortTab] = useState(listInfo.filter);

  return {
    sortTab,
    setSortTab,
    listInfo,
  };
};

export default useMoreListModel;
