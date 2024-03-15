"use client";

import * as S from "./DropDownMenu.styles";
import { MouseEvent } from "react";

import { DotMenu, Trash } from "@/components/icons";
import EditPencil from "@/components/icons/EditPencil";
import useToggle from "@/hooks/useToggle";
import { AnimatePresence } from "framer-motion";
import { useUI } from "@/components/uiContext/UiContext";
import { MateGatheringPlace } from "@/types/OriginDataType";
import Divider from "@/components/Divider/Divider";

interface DropDownMenuProps {
  isEdit?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
}

const DropDownMenu = ({ onEdit, onDelete, isEdit = true }: DropDownMenuProps) => {
  const { isToggle, handleToggle, toggleRef } = useToggle();
  const { setModalView, openModal } = useUI();

  const handleClickEdit = (e: MouseEvent<HTMLLIElement>) => {
    e.preventDefault();

    if (!onEdit) {
      return;
    }

    onEdit();
  };

  const handleClickDelete = (e: MouseEvent<HTMLLIElement>) => {
    e.preventDefault();

    if (!onDelete) {
      return;
    }

    onDelete();
  };

  return (
    <S.DropDownMenuContainer>
      <DotMenu
        className="w-full h-full"
        onClick={handleToggle}
        style={{ cursor: "pointer" }}
      />

      <AnimatePresence>
        {isToggle && (
          <S.DropDownMenuLayout ref={toggleRef}>
            <S.DropDownMenulist
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100%" }}
              exit={{ opacity: 0, height: 0 }}
            >
              {isEdit && (
                <>
                  <S.DropDownMenuItem onClick={handleClickEdit}>
                    <EditPencil className="w-6 h-6" />
                    수정
                  </S.DropDownMenuItem>
                  <Divider style={{ margin: "0.3rem 0" }} />
                </>
              )}

              <S.DropDownMenuItem onClick={handleClickDelete}>
                <Trash className="w-6 h-6" />
                삭제
              </S.DropDownMenuItem>
            </S.DropDownMenulist>
          </S.DropDownMenuLayout>
        )}
      </AnimatePresence>
    </S.DropDownMenuContainer>
  );
};

export default DropDownMenu;