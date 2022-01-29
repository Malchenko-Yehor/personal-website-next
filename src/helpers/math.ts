import { Coordinates } from 'types';

export const isEven = (value: number) => {
  if (value % 2 === 0) return true;
  else return false;
};

export const isOdd = (value: number) => {
  if (value === 0) return false;
  else if (value % 2 !== 0) return true;
  else return false;
};

export const getRandomInRange = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export const degreesToRad = (degrees: number) => {
  return degrees * (Math.PI / 180);
};

export const getSplittedDegreesRange = (start: number, end: number, times: number) => {
  const degreesDiff = Math.abs(end - start);

  return degreesDiff / times;
};

export const getPointsAnglesInRange = (start: number, end: number, pointsAmount: number) => {
  const degreesBetweenPoints = getSplittedDegreesRange(start, end, pointsAmount + 1);
  const pointsDegrees: Array<number> = [];

  for (let index = 1; index <= pointsAmount; index++) {
    const pointDegree = start + index * degreesBetweenPoints;

    pointsDegrees.push(pointDegree);
  }

  return pointsDegrees;
};

export const getPointsCoordinates = (angles: Array<number>): Array<Coordinates> => {
  const coordinates = angles.map((angle) => {
    const radians = degreesToRad(angle);

    const x = +Math.cos(radians).toFixed(5);
    const y = +Math.sin(radians).toFixed(5);

    return { x, y };
  });

  return coordinates;
};
