"use client";

import * as S from "./MateDropDownMenu.styles";
import { MouseEvent } from "react";

import { DotMenu, Trash } from "@/components/icons";
import EditPencil from "@/components/icons/EditPencil";
import useToggle from "@/hooks/useToggle";
import { AnimatePresence } from "framer-motion";
import { useUI } from "@/components/uiContext/UiContext";
import { MateGatheringPlace } from "@/types/OriginDataType";
import Divider from "@/components/Divider/Divider";

interface MateDropDownMenuProps {
  postId: string;
}

const MateDropDownMenu = ({ postId }: MateDropDownMenuProps) => {
  const { isToggle, handleToggle, toggleRef } = useToggle();
  const { setModalView, openModal } = useUI();

  const handleClickEdit = (e: MouseEvent<HTMLLIElement>) => {
    e.preventDefault();

    console.log("수정 클릭");

    setModalView("MATE_CREATE_MAP_VIEW");
    openModal({
      baseLocation: { lat: 37.497, lng: 127.0254 },
      onSubmit: ({ detail, point }: MateGatheringPlace) => {
        console.log(detail, point);
      },
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
          <S.MateDropDownMenuLayout ref={toggleRef}>
            <S.MateDropDownMenuContainer
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100%" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <S.MateDropDownMenuItem onClick={handleClickEdit}>
                <EditPencil className="w-6 h-6" />
                수정
              </S.MateDropDownMenuItem>

              <Divider />

              <S.MateDropDownMenuItem onClick={handleClickRemove}>
                <Trash className="w-6 h-6" />
                삭제
              </S.MateDropDownMenuItem>
            </S.MateDropDownMenuContainer>
          </S.MateDropDownMenuLayout>
        )}
      </AnimatePresence>
    </S.MateMenuLayout>
  );
};

export default MateDropDownMenu;
