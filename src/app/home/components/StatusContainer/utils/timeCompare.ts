const timeCompare = (previousTime: Date, range: number) => {
  const currentTime = new Date();

  const timeDifference = currentTime.getTime() - new Date(previousTime).getTime();
  const min = timeDifference / 1000 / 60;

  return range <= min;
};

export default timeCompare;
