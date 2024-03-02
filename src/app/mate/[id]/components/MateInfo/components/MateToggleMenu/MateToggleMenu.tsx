"use client";

import * as S from "./MateToggleMenu.styles";
import { DotMenu } from "@/components/icons";

const MateToggleMenu = () => {
  return (
    <>
      <DotMenu className="w-8 h-8 mr-4" />

      <S.MateToggleMenuLayout></S.MateToggleMenuLayout>
    </>
  );
};

export default MateToggleMenu;
