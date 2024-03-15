/**
 *
 * @param meter 1m 단위로 전달되는 매개변수 입니다.
 * @returns 1km 이상인 경우에는 소숫점 한 자리까지 반올림하여 거리를 km로 보여주고,
 *          미만인 경우 전달 받은 meter그대로 m 단위로 보여줍니다.
 */
const convertMeter = (meter: number): string => {
  if (!meter) {
    return "0";
  }

  const distance = Number((meter / 1000).toFixed(1));
  if (meter >= 1000) {
    return `${distance}km`;
  }
  return `${meter.toFixed(0)}m`;
};

export default convertMeter;
