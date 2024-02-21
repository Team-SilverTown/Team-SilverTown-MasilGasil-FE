"use client";

import useLoadingSpinnerStore from "@/stores/ui/useLoadingSpinnerStore";
import * as S from "./LoadingSpinner.styles";

const LoadingSpinner = () => {
  const { isShow } = useLoadingSpinnerStore();

  if (!isShow) {
    return;
  }
  return <S.LoadingSpinnerBackground>LoadingSpinner</S.LoadingSpinnerBackground>;
};

export default LoadingSpinner;
