import React, { FC } from 'react';
import * as S from './DateRange.styled';
import CalendarIcon from '@icons/calendar.svg';
import { DateRange as DateRangeProps } from 'types';

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