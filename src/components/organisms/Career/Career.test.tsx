import { getExperience } from './Career';
import { DateRange } from 'types';


describe('getExperience()', () => {
  test('should return right amount of experience depending on date ranges in timeline entires', () => {
    const rangesList: Array<DateRange> = [
      {
        startDate: new Date('01-01-2018'),
        endDate: new Date('01-01-2019')
      },
      {
        startDate: new Date('01-01-2020'),
        endDate: new Date('03-01-2020')
      }
    ];

    const experience = getExperience(rangesList);

    expect(experience).toBe('1 year 2 months');
  });

  test('should return only months if there is 0 years of experience', () => {
    const rangesList: Array<DateRange> = [
      {
        startDate: new Date('01-01-2020'),
        endDate: new Date('03-01-2020')
      }
    ];

    const experience = getExperience(rangesList);

    expect(experience).toBe('2 months');
  });

  test('should return only years if months are multiple to 12 ', () => {
    const rangesList: Array<DateRange> = [
      {
        startDate: new Date('01-01-2019'),
        endDate: new Date('01-01-2020')
      }
    ];

    const experience = getExperience(rangesList);

    expect(experience).toBe('1 year');
  });
});