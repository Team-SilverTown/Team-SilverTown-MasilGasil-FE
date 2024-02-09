"use client";

import React from "react";
import { Hello, ObjectOne, ObjectThree, ObjectTwo } from "./Home.styles";
import { useUI } from "@/components/uiContext/UiContext";

const HomeView = () => {
  const { setModalView, openModal } = useUI();

  const clickHandler = () => {
    setModalView("INIT_VIEW");
    openModal();
  };

  return (
    <main className="relative max-w-[1000px] min-h-screen flex flex-col items-center justify-center p-24 m-auto ">
      <ObjectOne />
      <ObjectTwo />
      <ObjectThree />
      <div className="z-10 flex flex-col items-center justify-center">
        <Hello>Hello SilverTown FE</Hello>
        <button
          type="button"
          onClick={clickHandler}
        >
          Open Modal
        </button>
      </div>
    </main>
  );
};

export default HomeView;
