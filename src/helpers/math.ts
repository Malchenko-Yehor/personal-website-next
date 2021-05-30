export const isEven = (value: number) => {
  if (value % 2 === 0)
    return true;
  else
    return false;
};

export const isOdd = (value: number) => {
  if (value === 0)
    return false;
  else if (value % 2 !== 0)
    return true;
  else
    return false;
};

export const getRandomInRange = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
}