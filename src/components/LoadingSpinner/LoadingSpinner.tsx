"use client";

import * as S from "./LoadingSpinner.styles";

import { useEffect } from "react";
import Lottie from "react-lottie";

import useLoadingSpinnerStore from "@/lib/stores/ui/useLoadingSpinnerStore";

import animationData from "./animationData.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const LoadingSpinner = () => {
  const { isShow, closeLoadingSpinner } = useLoadingSpinnerStore();

  const handleEvent = () => {
    closeLoadingSpinner();
  };

  useEffect(() => {
    window.addEventListener("popstate", handleEvent);
    return () => {
      window.removeEventListener("popstate", handleEvent);
    };
  }, []);

  if (!isShow) {
    return;
  }

  return (
    <S.LoadingSpinnerBackground>
      <Lottie
        options={defaultOptions}
        height={200}
        width={240}
        isClickToPauseDisabled={true}
      />
    </S.LoadingSpinnerBackground>
  );
};

export default LoadingSpinner;
