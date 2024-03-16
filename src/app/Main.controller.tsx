"use client";

import React from "react";

import MainView from "./Main.view";
import useAuthStore from "@/stores/useAuthStore";

const MainController = () => {
  const { isLogIn } = useAuthStore();

  return <MainView isLogIn={isLogIn} />;
};

export default MainController;
