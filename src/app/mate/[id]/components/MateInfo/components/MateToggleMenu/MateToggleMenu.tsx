"use client";

import Divider from "@/components/Divider/Divider";
import * as S from "./MateToggleMenu.styles";
import { DotMenu, Trash } from "@/components/icons";
import EditPencil from "@/components/icons/EditPencil";

interface MateToggleMenuProps {
  postId: string;
}

const MateToggleMenu = ({ postId }: MateToggleMenuProps) => {
  return (
    <>
      <DotMenu className="w-8 h-8 mr-4" />

      <S.MateToggleMenuLayout>
        <S.MateToggleMenuItem>
          <EditPencil className="w-6 h-6" />
          수정
        </S.MateToggleMenuItem>
        <Divider />
        <S.MateToggleMenuItem>
          <Trash className="w-6 h-6" /> 삭제
        </S.MateToggleMenuItem>
      </S.MateToggleMenuLayout>
    </>
  );
};

export default MateToggleMenu;
