import { WALKLIST_DUMMY_DATA, USER_DUMMY_DATA } from "./Home.constants";
import HomeView from "./Home.view";
import Notification from "./components/Notification/Notification";
import { TopNavigator } from "@/components/navigators/TopNavigator";

const HomeController = () => {
  return (
    <>
      <TopNavigator rightChildren={<Notification isNotification={true} />} />
      <HomeView
        userInfo={USER_DUMMY_DATA}
        walkData={WALKLIST_DUMMY_DATA}
      />
    </>
  );
};

export default HomeController;
