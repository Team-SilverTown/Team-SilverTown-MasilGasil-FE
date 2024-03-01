const getCurrentDateTime = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");
  let hours: number | string = now.getHours();
  const minutes = "30";

  if (now.getMinutes() < 30) {
    hours -= 1;
  }

  if (hours < 0) {
    hours = "00";
  } else {
    hours = hours.toString().padStart(2, "0");
  }

  return {
    date: `${year}${month}${day}`,
    time: `${hours}${minutes}`,
  };
};

export default getCurrentDateTime;
