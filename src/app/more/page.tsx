import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";

import { HEADER_TITLE } from "./MoreList.constants";
import MoreListController from "./MoreList.controller";
import { KeywordType } from "./MoreList.types";
import SortTab from "./SortTab/SortTab";

interface MorePageProps {
  searchParams: { keyword: KeywordType; order: string; userId?: number };
}

const More = ({ searchParams }: MorePageProps) => {
  const { keyword, order, userId } = searchParams;

  const tabVisible = keyword === "my_post" || keyword === "my_like";

  return (
    <>
      <TopNavigator
        leftChildren={<GoBackButton />}
        title={HEADER_TITLE[keyword]}
      />
      <div
        style={{ paddingTop: "6rem", paddingBottom: "10rem" }}
        className="w-full h-full"
      >
        {tabVisible && (
          <SortTab
            keyword={keyword}
            order={order}
            userId={userId}
          />
        )}
        <MoreListController
          keyword={keyword}
          order={order}
          userId={userId}
        />
      </div>
    </>
  );
};

export default More;
