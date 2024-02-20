"use client";

import { useSearchParams } from "next/navigation";
import { HEADER_TITLE } from "./MoreList.constants";
import { TopNavigator } from "@/components/navigators/TopNavagtor";
import { GoBackButton } from "@/components/navigators/TopNavagtor/components";
import MoreListView from "./MoreList.view";

const More = () => {
  const params = useSearchParams();
  const queryString = params.get("keyword") || "더 보기 페이지";
  return (
    <>
      <TopNavigator
        leftChildren={<GoBackButton />}
        title={HEADER_TITLE[queryString]}
      />
      <MoreListView />
    </>
  );
};

export default More;
