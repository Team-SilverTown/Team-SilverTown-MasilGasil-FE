"use client";

import useLoadingSpinnerStore from "@/lib/stores/ui/useLoadingSpinnerStore";
import * as S from "./LoadingSpinner.styles";
import Lottie from "react-lottie";
import animationData from "./animationData.json";
import { useEffect } from "react";

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
