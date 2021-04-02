import H3 from '@atoms/H3';
import Paragraph from '@atoms/Paragraph';
import DateRange, { DateRangeProps } from '@molecules/DateRange';
import React, { FC } from 'react';
import * as S from './InfoCard.styled';

export interface InfoCardProps {
  dateRange: DateRangeProps,
  title: string
  description?: string,
  arrowOnRightSide?: boolean
};

const InfoCard: FC<InfoCardProps> = ({ dateRange, title, description, arrowOnRightSide }) => {
  return (
    <S.InfoCard>
      <S.Header arrowOnRightSide={arrowOnRightSide}>
        <DateRange {...dateRange} />
      </S.Header>
      <S.ContentContainer>
        <H3 text={title} />
        {description && <Paragraph text={description} />}
      </S.ContentContainer>
    </S.InfoCard>
  );
};


export default InfoCard;