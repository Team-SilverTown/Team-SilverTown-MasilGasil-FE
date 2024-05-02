import { DropDownMenu } from "@/components";
import { useUI } from "@/components/uiContext/UiContext";

const LogKebabMenu = () => {
  const { openModal, setModalView } = useUI();

  const handleClickAlert = () => {
    setModalView("DEPLOY_ALERT_VIEW");
    openModal();
  };

  return (
    <div className=" mr-[1.5rem] cursor-pointer">
      <DropDownMenu
        onDelete={handleClickAlert}
        onEdit={handleClickAlert}
      />
    </div>
  );
};

export default LogKebabMenu;
