import { StrapiFile } from '@api/types';
import AnimatedHexagon from '@atoms/AnimatedHexagon';
import StarsRating from '@molecules/StarsRating';
import { Variants } from 'framer-motion';
import { FC, useState } from 'react';
import * as S from './HexagonCard.styled';

export interface HexagonCardProps {
  image: StrapiFile;
  title: string;
}

const HexagonCard: FC<HexagonCardProps> = ({ image, title }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  const iconVariants: Variants = {
    initial: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.3,
      },
    },
    animated: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const titleVariants: Variants = {
    initial: {
      y: 20,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    animated: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.3,
      },
    },
  };

  const hexagonVariants: Variants = {
    initial: {
      rotate: 0,
    },
    animated: {
      rotate: 45,
    },
  };

  return (
    <S.HexagonCard
      animate={isAnimated ? 'animated' : 'initial'}
      initial="initial"
      onMouseEnter={() => setIsAnimated(true)}
      onMouseLeave={() => setIsAnimated(false)}
    >
      <S.HexagonWrapper variants={hexagonVariants}>
        <AnimatedHexagon />
      </S.HexagonWrapper>
      <S.Icon src={image.url} alt={image.alternativeText} variants={iconVariants} />
      <S.Title variants={titleVariants}>{title}</S.Title>

      <StarsRating
        starsAmount={5}
        rating={3}
        initialVariant="hidden"
        animate={isAnimated ? 'visible' : 'hidden'}
      />
    </S.HexagonCard>
  );
};

export default HexagonCard;
