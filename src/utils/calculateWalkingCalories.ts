import { UserInfoType } from "@/app/user/[id]/MyPage.types";
import { calculateAge } from ".";

interface calculateWalkingCaloriesProps {
  userInfo: UserInfoType;
  distance: number;
  walkingMET?: number;
}

interface calculateWalkingCaloriesResponse {
  isUserInfoCheck: boolean;
  calories: null | number;
}

/**
 * 산책을 통해 소모된 칼로리를 계산합니다. 유저의 신체 정보와 산책한 거리를 기반으로 계산하며,
 * 유저의 정보가 충분하지 않은 경우 유효하지 않음을 반환합니다.
 * @param userInfo params.userInfo 유저의 신체 정보를 포함하는 객체입니다. 이 객체는 성별(sex), 생년월일(birthDate),
 *        키(height), 몸무게(weight), 운동 강도(exerciseIntensity)를 속성으로 가집니다.
 * @param distance params.distance 유저가 산책한 거리(m)입니다.
 * @param walkingMET [params.walkingMET=3.3] 걷기 운동의 대사당량(MET) 값으로, 기본값은 3.3입니다.
 *        이 값은 걷기 운동의 강도를 나타냅니다.
 * @returns {Object} 계산 결과를 포함하는 객체입니다. 이 객체는 유저 정보의 유효성(isUserInfoCheck)과
 *          소모된 칼로리(calories)를 속성으로 가집니다. 유저 정보가 유효하지 않은 경우,
 *          isUserInfoCheck는 false이고 calories는 null입니다. 유저 정보가 유효한 경우,
 *          isUserInfoCheck는 true이고 calories는 소모된 칼로리의 수치(반올림된 정수)입니다.
 */

const calculateWalkingCalories = ({
  userInfo,
  distance,
  walkingMET = 3.3,
}: calculateWalkingCaloriesProps): calculateWalkingCaloriesResponse => {
  const { sex, birthDate, height, weight, exerciseIntensity } = userInfo;

  let age: number | null = null;
  if (birthDate) {
    age = calculateAge(birthDate);
  }

  if (!sex || !age || !height || !weight || !exerciseIntensity) {
    return {
      isUserInfoCheck: false,
      calories: null,
    };
  }

  // 기초 대사량(BMR) 계산
  let BMR: number = 0;
  if (sex === "MALE") {
    BMR = 66.5 + 13.75 * weight + 5.003 * height - 6.75 * age;
  } else if (sex === "FEMALE") {
    BMR = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;
  }

  let activityCoefficient = 0;

  switch (exerciseIntensity) {
    case "SUPER_LOW":
      activityCoefficient = 1.2;
    case "LOW":
      activityCoefficient = 1.375;
      break;
    case "MIDDLE":
      activityCoefficient = 1.55;
      break;
    case "HIGH":
      activityCoefficient = 1.725;
      break;
    case "SUPER_HIGH":
      activityCoefficient = 1.9;
  }

  // 활동 계수에 따른 BMR 보정
  const adjustedBMR = BMR * activityCoefficient;

  // 걷기 시간(시) 계산: 거리(m) / 속도(m/s)
  // 가정: 걷는 속도는 약 1.4m/s (약 5km/h)
  const walkingSpeed = 1.4;
  const walkingTime = distance / walkingSpeed / 3600; // 시간으로 환산하기 위해 3600으로 나눔

  // 걷기로 인한 칼로리 소모량 계산
  const calories = ((adjustedBMR * walkingMET) / 24) * walkingTime;

  return {
    isUserInfoCheck: true,
    calories: Math.round(calories),
  };
};

export default calculateWalkingCalories;
