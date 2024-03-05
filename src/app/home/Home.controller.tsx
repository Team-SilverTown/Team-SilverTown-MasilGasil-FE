import HomeView from "./Home.view";
import Notification from "./components/Notification/Notification";
import { TopNavigator } from "@/components/navigators/TopNavigator";

const HomeController = () => {
  return (
    <>
      <TopNavigator rightChildren={<Notification isNotification={true} />} />
      <HomeView />
    </>
  );
};

export default HomeController;
