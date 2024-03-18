import { DropDownMenu } from "@/components";
import { useUI } from "@/components/uiContext/UiContext";

const PostKebabMenu = () => {
  const { openModal, setModalView } = useUI();

  const handleClickAlert = () => {
    setModalView("DEPLOY_ALERT_VIEW");
    openModal();
  };

  return (
    <div style={{ marginRight: "1.5rem", cursor: "pointer" }}>
      <DropDownMenu
        onDelete={handleClickAlert}
        onEdit={handleClickAlert}
      />
    </div>
  );
};

export default PostKebabMenu;
