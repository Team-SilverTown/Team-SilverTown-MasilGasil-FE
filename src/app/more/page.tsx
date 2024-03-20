import { TopNavigator } from "@/components/navigators/TopNavigator";
import { GoBackButton } from "@/components/navigators/TopNavigator/components";
import MoreListController from "./MoreList.controller";
import SortTab from "./SortTab/SortTab";
import { HEADER_TITLE } from "./MoreList.constants";

interface MorePageProps {
  searchParams: { keyword: string; order: string };
}

const More = ({ searchParams }: MorePageProps) => {
  const { keyword, order } = searchParams;

  return (
    <>
      <TopNavigator
        leftChildren={<GoBackButton />}
        title={HEADER_TITLE[keyword]}
      />
      <div style={{ paddingTop: "6rem" }}>
        <SortTab
          keyword={keyword}
          order={order}
        />
        <MoreListController
          keyword={keyword}
          order={order}
        />
      </div>
    </>
  );
};

export default More;
