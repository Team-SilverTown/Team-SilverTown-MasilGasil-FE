/**
 * 입력된 날짜를 '년-월-일' 형식의 문자열로 변환하는 함수입니다.
 * @param {Date | string} inputDate - 변환하려는 날짜. Date 객체 또는 ISO 8601 형식의 문자열을 입력받습니다.
 * @returns {string} '년-월-일' 형식으로 변환된 날짜를 문자열로 반환합니다.
 * @throws {Error} 입력된 날짜가 유효하지 않을 때, 또는 날짜를 변환할 수 없을 때 오류를 발생시킵니다.
 */

export const convertDateToYearMonthDay = (inputDate: string | Date): string => {
  let date: Date;

  if (inputDate instanceof Date) {
    date = inputDate;
  } else if (typeof inputDate === "string") {
    date = new Date(inputDate);
  } else {
    throw new Error("입력된 날짜가 유효하지 않습니다.");
  }

  if (isNaN(date.getTime())) {
    throw new Error("입력된 날짜를 변환할 수 없습니다.");
  }

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const monthString = month < 10 ? "0" + month : month;
  const dayString = day < 10 ? "0" + day : day;

  return `${year}-${monthString}-${dayString}`;
};
