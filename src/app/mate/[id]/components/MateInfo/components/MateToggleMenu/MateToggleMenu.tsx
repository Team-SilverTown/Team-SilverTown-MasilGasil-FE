"use client";

import * as S from "./MateToggleMenu.styles";
import { DotMenu } from "@/components/icons";

interface MateToggleMenuProps {
  postId: string;
}

const MateToggleMenu = ({ postId }: MateToggleMenuProps) => {
  return (
    <>
      <DotMenu className="w-8 h-8 mr-4" />

      <S.MateToggleMenuLayout></S.MateToggleMenuLayout>
    </>
  );
};

export default MateToggleMenu;
