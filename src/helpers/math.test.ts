import { isEven, isOdd } from "./math";

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