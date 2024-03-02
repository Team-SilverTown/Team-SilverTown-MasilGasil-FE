"use client";

import { TopNavigator } from "@/components/navigators/TopNavigator";
import HomeView from "./Home.view";
import { NotificationActive, NotificationOff } from "@/components/icons";
import useHomeModel from "./Home.model";

const HomeController = () => {
  const { isNotification, temperature, weather, precipitation, pm10, address } = useHomeModel();

  return (
    <>
      <TopNavigator rightChildren={isNotification ? <NotificationActive /> : <NotificationOff />} />
      <HomeView
        temperature={temperature}
        weather={weather}
        precipitation={precipitation}
        address={address}
        pm10={pm10}
      />
    </>
  );
};

export default HomeController;
