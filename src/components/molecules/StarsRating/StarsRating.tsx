import { FC, useMemo } from 'react';
import * as S from './StarsRating.styled';
import StarIcon from '@icons/star.svg';
import { v4 as uuid } from 'uuid';
import { Transition, Variants } from 'framer-motion';

export interface StarsRatingProps {
  starsAmount: number;
  rating: number;
  initialVariant?: string;
  animate?: string;
}

const StarsRating: FC<StarsRatingProps> = ({ starsAmount, rating, initialVariant = 'visible', animate }) => {
  const stars = useMemo(() => {
    return new Array(starsAmount).fill(null).map((_, index) => {
      return { id: uuid(), isActive: index < rating };
    });
  }, [starsAmount, rating]);

  const starVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  const starTransition: Transition = {
    type: 'spring',
    damping: 10,
  };

  return (
    <S.StarsRating transition={{ staggerChildren: 0.075 }} initial={initialVariant} animate={animate}>
      {stars.map((star) => (
        <S.StarItem
          key={star.id}
          isActive={star.isActive}
          variants={starVariants}
          transition={starTransition}
        >
          <StarIcon />
        </S.StarItem>
      ))}
    </S.StarsRating>
  );
};

export default StarsRating;
