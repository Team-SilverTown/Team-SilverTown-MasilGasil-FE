import { useCallback, useMemo, useState } from "react";
import { UserInfoType } from "@/app/user/[id]/Mypage.types";
import { calculateAge, calculateWalkingCalories } from "@/utils";

interface useCalculateCaloriesProps {
  userInfo: UserInfoType;
  totalWalkDistance: number;
}

const useCalculateCalories = ({ userInfo, totalWalkDistance }: useCalculateCaloriesProps) => {
  const [calories, setCalories] = useState(0);
  const { sex, birthDate, height, weight, exerciseIntensity } = userInfo;

  const userInfoCheck = useCallback(() => {
    if (!sex || !birthDate || !height || !weight || !exerciseIntensity) {
      return false;
    }

    const age = calculateAge(birthDate);
    const calories = calculateWalkingCalories(
      sex,
      age,
      height,
      weight,
      exerciseIntensity,
      totalWalkDistance,
    );
    setCalories(calories);
    return true;
  }, [sex, birthDate, height, weight, exerciseIntensity]);

  const isUserInfoCheck = useMemo(() => {
    return userInfoCheck();
  }, [userInfoCheck]);

  return {
    isUserInfoCheck,
    calories,
  };
};

export default useCalculateCalories;
