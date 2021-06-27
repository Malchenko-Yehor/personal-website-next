import {
  isEven,
  isOdd,
  getRandomInRange,
  degresToRad,
  getSplittedDegreesRange,
  getDegreesOfPointsInRange
} from "./math";

describe('isEven()', () => {
  test('expect even numbers to return true', () => {
    expect(isEven(0)).toBe(true);
    expect(isEven(2)).toBe(true);
    expect(isEven(4)).toBe(true);
    expect(isEven(6)).toBe(true);
    expect(isEven(8)).toBe(true);
    expect(isEven(10)).toBe(true);
    expect(isEven(12)).toBe(true);
  });

  test('expect odd numbers to return false', () => {
    expect(isEven(1)).toBe(false);
    expect(isEven(3)).toBe(false);
    expect(isEven(5)).toBe(false);
    expect(isEven(7)).toBe(false);
    expect(isEven(9)).toBe(false);
    expect(isEven(11)).toBe(false);
  });
});


describe('isOdd()', () => {
  test('expect even numbers to return false', () => {
    expect(isOdd(0)).toBe(false);
    expect(isOdd(2)).toBe(false);
    expect(isOdd(4)).toBe(false);
    expect(isOdd(6)).toBe(false);
    expect(isOdd(8)).toBe(false);
    expect(isOdd(10)).toBe(false);
    expect(isOdd(12)).toBe(false);
  });

  test('expect odd numbers to return true', () => {
    expect(isOdd(1)).toBe(true);
    expect(isOdd(3)).toBe(true);
    expect(isOdd(5)).toBe(true);
    expect(isOdd(7)).toBe(true);
    expect(isOdd(9)).toBe(true);
    expect(isOdd(11)).toBe(true);
  });
});

describe('getRandomInRange()', () => {
  test('should generate random number in given range', () => {
    const min = 10;
    const max = 50;

    const random1 = getRandomInRange(min, max);
    const random2 = getRandomInRange(min, max);
    const random3 = getRandomInRange(min, max);

    expect(random1).toBeLessThanOrEqual(max);
    expect(random1).toBeGreaterThanOrEqual(min);

    expect(random2).toBeLessThanOrEqual(max);
    expect(random2).toBeGreaterThanOrEqual(min);

    expect(random3).toBeLessThanOrEqual(max);
    expect(random3).toBeGreaterThanOrEqual(min);
  });
});

describe('degreesToRad()', () => {
  test('should convert degress to radians', () => {
    const rads = degresToRad(70);
    const parsedRads = Number.parseFloat(rads.toFixed(5));

    expect(parsedRads).toBe(1.22173);
  });

  test('should convert negative degress to negative radians', () => {
    const rads = degresToRad(-70);
    const parsedRads = Number.parseFloat(rads.toFixed(5));

    expect(parsedRads).toBe(-1.22173);
  });
});

describe('getSplittedDegreesRange()', () => {
  test('should split degrees range x times', () => {
    const splitValue = getSplittedDegreesRange(180, 360, 3);

    expect(splitValue).toBe(60);
  });

});

describe('getDegreesOfPointsInRange()', () => {
  test('should return array of degrees for points in given degrees range', () => {
    const pointsDegrees = getDegreesOfPointsInRange(180, 360, 2);
    const pointsDegreesStringified = JSON.stringify(pointsDegrees);
    const expectedResult = [240, 300]
    const expectedResultStringified = JSON.stringify(expectedResult);

    expect(pointsDegreesStringified).toBe(expectedResultStringified);
  });
});