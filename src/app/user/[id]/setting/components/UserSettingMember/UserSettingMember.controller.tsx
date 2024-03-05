import { usePathname, useRouter } from "next/navigation";
import UserSettingMemberView from "./UserSettingMember.view";

const UserSettingMemberController = () => {
  const router = useRouter();
  const pathName = usePathname();

  const handleClick = () => {
    router.push(`${pathName}/edit`);
  };

  return <UserSettingMemberView onClick={handleClick} />;
};

export default UserSettingMemberController;
