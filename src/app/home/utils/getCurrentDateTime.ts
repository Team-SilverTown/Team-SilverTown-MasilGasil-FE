const getCurrentDateTime = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  let day = now.getDate().toString().padStart(2, "0");
  let hours: number | string = now.getHours();
  let minutes = "30";

  if (now.getMinutes() <= 30) {
    hours -= 1;
  }

  if (hours < 0) {
    hours = "23";
    day = (now.getDate() - 1).toString().padStart(2, "0");
  } else {
    hours = hours.toString().padStart(2, "0");
  }

  console.log(year, month, day);
  console.log(hours, minutes);

  return {
    date: `${year}${month}${day}`,
    time: `${hours}${minutes}`,
  };
};

export default getCurrentDateTime;
