import { DateRange } from "types";
import { getFormattedDate, getMonthsDifference, getMonthsDifferenceFromRangesList } from "./date";


describe('getFormattedDate()', () => {
  test('formats date correctly', () => {
    const date = new Date('3/30/2021');
    const date2 = new Date('11/11/2011');

    expect(getFormattedDate(date)).toBe('03/2021');
    expect(getFormattedDate(date2)).toBe('11/2011');
  });
});

describe('getMonthsDifference()', () => {
  test('calculates amount of months between two dates correctly', () => {
    const date1 = new Date('01-01-2019');
    const date2 = new Date('01-01-2020');

    const monthsDiff1 = getMonthsDifference(date1, date2);
    const monthsDiff2 = getMonthsDifference(date2, date1);

    expect(monthsDiff1).toBe(12);
    expect(monthsDiff2).toBe(12);
  });
});


describe('getMonthsDifferenceFromRangesList()', () => {
  test('calculates total amount of months between dates in date ranges list', () => {
    const rangesList: Array<DateRange> = [
      {
        startDate: new Date('01-01-2020'),
        endDate: new Date('06-01-2020')
      },
      {
        startDate: new Date('08-01-2020'),
        endDate: new Date('12-01-2020')
      }
    ];

    const monthsDifference = getMonthsDifferenceFromRangesList(rangesList);

    expect(monthsDifference).toBe(9);
  });
});

