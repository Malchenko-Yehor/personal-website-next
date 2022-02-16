import Interest, { InterestProps } from '@atoms/Interest/Interest';
import { Variants } from 'framer-motion';
import { FC } from 'react';
import * as S from './InterestsList.styled';

export interface InterestsListItem extends InterestProps {
  id: string;
}

export interface InterestsListProps {
  items: InterestsListItem[];
}

const InterestsList: FC<InterestsListProps> = ({ items }) => {
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <S.InterestsList>
      {items.map((item) => (
        <S.Item key={item.id} variants={itemVariants}>
          <Interest title={item.title} icon={item.icon} />
        </S.Item>
      ))}
    </S.InterestsList>
  );
};

export default InterestsList;
