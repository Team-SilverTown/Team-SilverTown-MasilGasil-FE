"use client";

import { usePathname, useRouter } from "next/navigation";

const useUserSettingMemberController = () => {
  const router = useRouter();
  const pathName = usePathname();

  const handleClick = () => {
    router.push(`${pathName}/edit`);
  };

  return {
    handleClick,
  };
};

export default useUserSettingMemberController;
