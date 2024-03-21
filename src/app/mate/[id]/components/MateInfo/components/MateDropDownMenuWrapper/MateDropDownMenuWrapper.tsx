"use client";

import { DropDownMenu } from "@/components";
import { useUI } from "@/components/uiContext/UiContext";
import useMeStore from "@/stores/useMeStore";
import { useMemo } from "react";

interface MateDropDownMenuWrapperProps {
  postId: string;
  authorId: string | number;
}

const MateDropDownMenuWrapper = ({ postId, authorId }: MateDropDownMenuWrapperProps) => {
  const { userId } = useMeStore();

  const isAuthor = useMemo(() => authorId === userId, [authorId, userId]);

  console.log(userId, authorId);

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
