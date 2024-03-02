"use client";

import Divider from "@/components/Divider/Divider";
import * as S from "./MateToggleMenu.styles";
import { DotMenu, Trash } from "@/components/icons";
import EditPencil from "@/components/icons/EditPencil";
import useToggle from "@/hooks/useToggle";
import { AnimatePresence } from "framer-motion";

interface MateToggleMenuProps {
  postId: string;
}

const MateToggleMenu = ({ postId }: MateToggleMenuProps) => {
  const { isToggle, handleToggle, toggleRef } = useToggle();
  return (
    <>
      <DotMenu
        className="w-8 h-8 mr-4"
        onClick={handleToggle}
        style={{ cursor: "pointer" }}
      />

      <AnimatePresence>
        {isToggle && (
          <S.MateToggleMenuLayout ref={toggleRef}>
            <S.MateToggleMenuContainer
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100%" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <S.MateToggleMenuItem>
                <EditPencil className="w-6 h-6" />
                수정
              </S.MateToggleMenuItem>
              <Divider />
              <S.MateToggleMenuItem>
                <Trash className="w-6 h-6" /> 삭제
              </S.MateToggleMenuItem>
            </S.MateToggleMenuContainer>
          </S.MateToggleMenuLayout>
        )}
      </AnimatePresence>
    </>
  );
};

export default MateToggleMenu;
