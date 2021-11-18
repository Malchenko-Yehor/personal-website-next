import H3 from '@atoms/H3';
import Paragraph from '@atoms/Paragraph';
import DateRange from '@molecules/DateRange';
import { FC } from 'react';
import { DateRange as DateRangeInterface } from 'types';
import * as S from './InfoCard.styled';

export interface InfoCardProps {
  dateRange: DateRangeInterface,
  title: string
  description?: string,
  arrowOnRightSide?: boolean,
  url?: string
};

const InfoCard: FC<InfoCardProps> = ({ dateRange, title, description, arrowOnRightSide, url }) => {
  const StyledInfoCard: FC = props => {
    if (url) return <S.Anchor {...props} href={url} target="__blank" />

    return <S.Article {...props} />
  };

  return (
    <StyledInfoCard>
      <S.Header arrowOnRightSide={arrowOnRightSide}>
        <DateRange {...dateRange} />
      </S.Header>
      <S.ContentContainer>
        <H3 text={title} />
        {description && <Paragraph text={description} />}
      </S.ContentContainer>
    </StyledInfoCard>
  );
};


export default InfoCard;