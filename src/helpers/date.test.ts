import { getFormattedDate } from "./date";


test('formats date correctly', () => {
  const date = new Date('3/30/2021');
  const date2 = new Date('11/11/2011');

  expect(getFormattedDate(date)).toBe('03/2021');
  expect(getFormattedDate(date2)).toBe('11/2011');
});