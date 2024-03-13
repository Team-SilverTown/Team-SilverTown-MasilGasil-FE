const convertFormatDate = (dateString: string): string => {
  const date = new Date(dateString);
  // 옵션 설정
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Seoul", // 시간대 설정
  };
  // Intl.DateTimeFormat을 이용한 포맷팅
  const formatter = new Intl.DateTimeFormat("ko-KR", options);
  let formattedDate = formatter.format(date);

  // 날짜 형식 조정: 마침표(.)를 대쉬(-)로 변경하고 양쪽 공백 제거
  formattedDate = formattedDate.replace(/\./g, "-").trim();
  // 날짜와 시간 사이의 불필요한 대시(-) 제거
  formattedDate = formattedDate.replace(/(-)(?=\s[오전|오후])/g, "");
  // 대시(-) 뒤의 불필요한 공백 제거
  formattedDate = formattedDate.replace(/-\s+/g, "-");

  // '오후'/'오전' 표시와 함께 반환된 문자열 조정
  return formattedDate.replace(/오전|오후/, (match) => (match === "오전" ? "오전 " : "오후 "));
};

export default convertFormatDate;
