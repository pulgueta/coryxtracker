export const daysFrom = (input: Date) => {
  const today = new Date();
  const timeDifference = today.getTime() - input.getTime();
  const daysDifference = timeDifference / (1000 * 3600 * 24);

  return Math.floor(daysDifference) - 1;
};
