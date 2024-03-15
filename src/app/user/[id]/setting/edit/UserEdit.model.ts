import { useState } from "react";

const useUserEditModel = () => {
  const [isCheckedNickname, setIsCheckedNickname] = useState(true);
  const [nickNameButtonDisabled, setNickNameButtonDisabled] = useState(true);

  return {
    isCheckedNickname,
    setIsCheckedNickname,
    nickNameButtonDisabled,
    setNickNameButtonDisabled,
  };
};

export default useUserEditModel;
