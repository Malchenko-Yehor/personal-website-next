import DateRange, { DateRangeProps } from '@molecules/DateRange';
import React, { FC } from 'react';
import * as S from './InfoCard.styled';

export interface InfoCardProps {
  dateRange: DateRangeProps,
  title: string
  description?: string
};

const InfoCard: FC<InfoCardProps> = ({ dateRange, title, description }) => {
  return (
    <S.InfoCard>
      <S.Header>
        <DateRange {...dateRange} />
      </S.Header>
    </S.InfoCard>
  );
};


export default InfoCard;