import React, { FC } from 'react';
import * as S from './DateRange.styled';
import CalendarIcon from '@icons/calendar.svg';
import { getFormattedDate } from '@helpers/date';

export interface DateRangeProps {
  startDate: Date,
  endDate: Date | 'now'
};

const DateRange: FC<DateRangeProps> = ({ startDate, endDate }) => {
  const formattedStartDate = getFormattedDate(startDate);
  const formattedEndDate = endDate === 'now' ? 'now' : getFormattedDate(endDate);

  return (
    <S.DateRange>
      <CalendarIcon />
      {formattedStartDate} - {formattedEndDate}
    </S.DateRange>
  );
};


export default DateRange;