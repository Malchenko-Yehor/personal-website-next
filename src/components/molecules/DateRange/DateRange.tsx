import CalendarIcon from '@icons/calendar.svg';
import { FC } from 'react';
import { DateRange as DateRangeProps } from 'types';
import * as S from './DateRange.styled';

const DateRange: FC<DateRangeProps> = ({ startDate, endDate }) => {
  const timeFormat = new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: 'short' });
  const formattedStartDate = timeFormat.format(startDate);
  const formattedEndDate = endDate === 'now' ? 'Now' : timeFormat.format(endDate);

  return (
    <S.DateRange>
      <CalendarIcon />
      {formattedStartDate} - {formattedEndDate}
    </S.DateRange>
  );
};


export default DateRange;