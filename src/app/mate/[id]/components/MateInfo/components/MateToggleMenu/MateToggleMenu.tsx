"use client";

import Divider from "@/components/Divider/Divider";
import * as S from "./MateToggleMenu.styles";
import { DotMenu, Trash } from "@/components/icons";
import EditPencil from "@/components/icons/EditPencil";
import useToggle from "@/hooks/useToggle";
import { AnimatePresence } from "framer-motion";
import { MouseEvent } from "react";
import { useUI } from "@/components/uiContext/UiContext";

interface MateToggleMenuProps {
  postId: string;
}

const MateToggleMenu = ({ postId }: MateToggleMenuProps) => {
  const { isToggle, handleToggle, toggleRef } = useToggle();
  const { setModalView, openModal } = useUI();

  const handleClickEdit = (e: MouseEvent<HTMLLIElement>) => {
    e.preventDefault();

    console.log("수정 클릭");

    setModalView("MATE_CREATE_MAP_VIEW");
    openModal({
      baseLocation: { lat: 37.497, lng: 127.0254 },
    });
  };

  const handleClickRemove = (e: MouseEvent<HTMLLIElement>) => {
    e.preventDefault();

    console.log("삭제 클릭");
  };

  return (
    <S.MateMenuLayout>
      <DotMenu
        className="w-full h-full"
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
              <S.MateToggleMenuItem onClick={handleClickEdit}>
                <EditPencil className="w-6 h-6" />
                수정
              </S.MateToggleMenuItem>

              <Divider />

              <S.MateToggleMenuItem onClick={handleClickRemove}>
                <Trash className="w-6 h-6" />
                삭제
              </S.MateToggleMenuItem>
            </S.MateToggleMenuContainer>
          </S.MateToggleMenuLayout>
        )}
      </AnimatePresence>
    </S.MateMenuLayout>
  );
};

export default MateToggleMenu;
