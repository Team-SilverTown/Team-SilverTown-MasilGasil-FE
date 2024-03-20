const convertFormatDate = (dateString: string): string => {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Seoul",
  };

  const formatter = new Intl.DateTimeFormat("ko-KR", options);
  let formattedDate = formatter.format(date);

  formattedDate = formattedDate.replace(/\./g, "-").trim();

  formattedDate = formattedDate.replace(/(-)(?=\s[오전|오후])/g, "");

  formattedDate = formattedDate.replace(/-\s+/g, "-");

  return formattedDate.replace(/오전|오후/, (match) => (match === "오전" ? "오전 " : "오후 "));
};

export default convertFormatDate;
