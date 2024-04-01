"use client";

import { useMemo } from "react";

import { DropDownMenu } from "@/components";
import { useUI } from "@/components/uiContext/UiContext";
import useMeStore from "@/lib/stores/useMeStore";

interface MateDropDownMenuWrapperProps {
  mateId: string | number;
  authorId: string | number;
}

const MateDropDownMenuWrapper = ({ mateId, authorId }: MateDropDownMenuWrapperProps) => {
  const { userId } = useMeStore();

  const isAuthor = useMemo(() => authorId === userId, [authorId, userId]);

  const { setModalView, openModal } = useUI();

  const deployAlert = () => {
    setModalView("DEPLOY_ALERT_VIEW");
    openModal();
  };

  if (!isAuthor) {
    return <></>;
  }

  return (
    <div>
      <DropDownMenu
        onEdit={deployAlert}
        onDelete={deployAlert}
      />
    </div>
  );
};

export default MateDropDownMenuWrapper;
