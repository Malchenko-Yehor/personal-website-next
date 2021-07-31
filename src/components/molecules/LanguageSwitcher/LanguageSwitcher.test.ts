import { getFlagTranslate } from '.'

describe('getFlagTranslate()', () => {
  test('returns coordinates multiplied by distance and "y" has inverted value', () => {
    const coordinates = { x: 0.5, y: -1 };
    const { x, y } = getFlagTranslate(coordinates, 20);

    expect(x).toBe(10);
    expect(y).toBe(20);
  });
});