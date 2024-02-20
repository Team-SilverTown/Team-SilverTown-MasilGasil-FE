"use client";
import { useSearchParams } from "next/navigation";
import { TopNavigator } from "@/components/navigators/TopNavagtor";
import { GoBackButton } from "@/components/navigators/TopNavagtor/components";
import MoreListView from "./MoreList.view";

const HEADER_TITLE: Record<string, string> = {
  my_log: "내 최근 산책 기록",
  my_post: "내가 작성한 산책로",
  my_like: "내가 좋아하는 산책로",
};

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
