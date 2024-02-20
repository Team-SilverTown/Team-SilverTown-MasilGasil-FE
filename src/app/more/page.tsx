"use client";

import { HEADER_TITLE } from "./MoreList.constants";
import MoreListView from "./MoreList.view";
import { useSearchParams } from "next/navigation";

const More = () => {
  const params = useSearchParams();
  const queryString = params.get("keyword") || "더 보기 페이지";
  return (
    <>
      <MoreListView topNavTitle={HEADER_TITLE[queryString]} />
    </>
  );
};

export default More;
