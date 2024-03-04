import { useState } from "react";

const useUserEditModel = () => {
  const [isCheckedNickname, setIsCheckedNickname] = useState(true);

  return {
    isCheckedNickname,
    setIsCheckedNickname,
  };
};

export default useUserEditModel;
