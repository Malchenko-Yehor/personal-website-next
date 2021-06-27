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

export const degresToRad = (degrees: number) => {
  return degrees * (Math.PI / 180);
};

export const getSplittedDegreesRange = (start: number, end: number, times: number) => {
  const degreesDiff = Math.abs(end - start);

  return degreesDiff / times;
};

export const getDegreesOfPointsInRange = (start: number, end: number, pointsAmount: number) => {
  const degreesBetweenPoints = getSplittedDegreesRange(start, end, pointsAmount + 1);
  const pointsDegrees = [];

  for (let index = 1; index <= pointsAmount; index++) {
    const pointDegree = start + index * degreesBetweenPoints;

    pointsDegrees.push(pointDegree);
  }

  return pointsDegrees;
};