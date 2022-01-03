import { StrapiFile } from '@api/types';
import AnimatedHexagon from '@atoms/AnimatedHexagon';
import { Variants } from 'framer-motion';
import React, { FC, useState } from 'react';
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
        delay: 0.2,
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
        delay: 0.2,
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
    </S.HexagonCard>
  );
};

export default HexagonCard;
