"use client";

import { DropDownMenu } from "@/components";
import { useUI } from "@/components/uiContext/UiContext";

interface MateDropDownMenuWrapperProps {
  postId: string;
}

const MateDropDownMenuWrapper = ({ postId }: MateDropDownMenuWrapperProps) => {
  const { setModalView, openModal } = useUI();

  const deployAlert = () => {
    setModalView("DEPLOY_ALERT_VIEW");
    openModal();
  };
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
