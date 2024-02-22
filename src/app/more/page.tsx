import { TopNavigator } from "@/components/navigators/TopNavagtor";
import MoreListController from "./MoreList.controller";
import MoreListView from "./MoreList.view";
import { GoBackButton } from "@/components/navigators/TopNavagtor/components";
import SortTab from "./SortTab/SortTab";

interface MorePageProps {
  searchParams: { keyword: string };
}

const More = ({ searchParams }: MorePageProps) => {
  console.log(searchParams);
  return (
    <>
      <TopNavigator
        leftChildren={<GoBackButton />}
        title={searchParams.keyword}
      />
      <div style={{ paddingTop: "6rem" }}>
        <SortTab />
        <MoreListController keyword={searchParams.keyword} />
      </div>
    </>
  );
};

export default More;
