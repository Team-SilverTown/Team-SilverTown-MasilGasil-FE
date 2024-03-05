const calculateWalkingCalories = (
  sex: "MALE" | "FEMALE",
  age: number,
  height: number,
  weight: number,
  exerciseIntensity: "SUPER_LOW" | "LOW" | "MIDDLE" | "HIGH" | "SUPER_HIGH",
  distance: number,
  walkingMET: number = 3.3,
): number => {
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

  return Math.round(calories);
};

export default calculateWalkingCalories;
