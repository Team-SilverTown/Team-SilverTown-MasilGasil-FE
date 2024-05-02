const findDust = (pm10: number | null) => {
  if (!pm10) {
    return;
  }

  if (pm10 >= 0 && pm10 <= 30) {
    return "좋음";
  } else if (pm10 >= 31 && pm10 <= 80) {
    return "보통";
  } else if (pm10 >= 81 && pm10 <= 150) {
    return "나쁨";
  } else if (pm10 > 150) {
    return "매우 나쁨";
  }
};

export default findDust;
