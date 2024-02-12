"use client";

import React from "react";
import { Hello, ObjectOne, ObjectThree, ObjectTwo } from "./Home.styles";
import { useUI } from "@/components/uiContext/UiContext";
import { Button } from "@/components";

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
        <Button
          variant="neumorp"
          onClickHandler={clickHandler}
          style={{ minHeight: 50 }}
          width={300}
          type="button"
        >
          <span style={{ fontWeight: 500 }}>Open Modal</span>
        </Button>
      </div>
    </main>
  );
};

export default HomeView;
