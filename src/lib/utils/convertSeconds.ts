/**
 *
 * @param sec 1초 단위로 전달되는 매개변수 입니다.
 * @returns 산책 시간이 1분 미만이라면 1분을 보여줍니다.
 *          산책 시간이 1시간 미만이라면 분만 보여줍니다.
 *          산책 시간이 1시간 이상이지만 0분이라면 시간만 보여줍니다.
 *          산책 시간이 1시간 이상이라면 시간, 분을 같이 보여줍니다.
 */

const convertSeconds = (sec: number): string => {
  if (!sec) {
    return "0초";
  }

  let minutes = Math.round(sec / 60);
  let hours = Math.floor(minutes / 60);
  minutes = minutes % 60;
  if (sec < 60) return `1분`;
  if (hours === 0) return `${minutes}분`;
  if (minutes === 0) return `${hours}시간`;
  return `${hours}시간 ${minutes}분`;
};

export default convertSeconds;
