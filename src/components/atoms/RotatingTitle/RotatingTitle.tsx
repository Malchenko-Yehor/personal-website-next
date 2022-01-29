import { isTouchDevice } from '@helpers/touch-device';
import { Variants, Transition } from 'framer-motion';
import { title } from 'process';
import { FC } from 'react';
import * as S from './RotatingTitle.styled';

export interface RotatingTitleProps {
  color: string;
  text: string;
  alwaysVisible?: boolean;
}

const RotatingTitle: FC<RotatingTitleProps> = ({ text, color, alwaysVisible }) => {
  const titleVariants: Variants = {
    initial: {
      x: '-50%',
      y: '-50%',
      rotate: isTouchDevice() ? -90 : -180,
      opacity: isTouchDevice() || alwaysVisible ? 1 : 0,
    },
    hover: {
      rotate: -90,
      opacity: 1,
    },
  };

  const titleTransition: Transition = {
    type: 'spring',
    damping: 10,
    mass: 0.75,
    stiffness: 100,
  };

  const titleTextVariants: Variants = {
    initial: {
      dy: 0,
    },
    animate: {
      dy: -1.5,
      transition: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 1.25,
      },
    },
  };

  return (
    <S.RotatingTitle
      viewBox="0 0 100 100"
      variants={titleVariants}
      transition={titleTransition}
      style={{ originX: '50%', originY: '50%' }}
    >
      <path id="curve" fill="transparent" d="M 0 50 A 50 50 0 0 1 100 50 A 50 50 0 0 1 0 50" />
      <S.TitleText
        fill={color}
        fontFamily="Rock"
        fontSize={10}
        variants={titleTextVariants}
        initial="initial"
        animate="animate"
      >
        <textPath href="#curve" textAnchor="middle" startOffset="50%">
          {text}
        </textPath>
      </S.TitleText>
    </S.RotatingTitle>
  );
};

export default RotatingTitle;
