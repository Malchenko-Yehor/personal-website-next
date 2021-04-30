import { DateRange } from "types";

/** Parsing date in mm/yyyy format*/
export const getFormattedDate = (date: Date) => {
  const month = date.getMonth() + 1;
  const paddedMonth = month.toString().padStart(2, '0');
  const year = date.getFullYear();

  return `${paddedMonth}/${year}`;
};

export const getMonthsDifference = (date1: Date, date2: Date) => {
  let months: number;

  months = (date2.getFullYear() - date1.getFullYear()) * 12;
  months -= date1.getMonth();
  months += date2.getMonth();

  return Math.abs(months);
};

export const getMonthsDifferenceFromRangesList = (rangesList: Array<DateRange>) => {
  const difference = rangesList.reduce((accum, range) => {
    const { startDate, endDate } = range;
    const endDateParsed = endDate === 'now' ? new Date() : endDate;
    const monthsDifference = getMonthsDifference(startDate, endDateParsed);

    return accum + monthsDifference;
  }, 0);

  return difference;
};