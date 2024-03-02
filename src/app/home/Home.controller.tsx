"use client";

import useHomeModel from "./Home.model";
import HomeView from "./Home.view";
import { TopNavigator } from "@/components/navigators/TopNavigator";
import { NotificationActive, NotificationOff } from "@/components/icons";

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
