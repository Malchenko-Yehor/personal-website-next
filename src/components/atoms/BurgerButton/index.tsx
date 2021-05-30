import { motion, Transition, Variants } from 'framer-motion';
import React, { FC, MouseEventHandler } from 'react';
import * as S from './BurgerButton.styled';

export interface BurgerButtonProps {
  onClick: MouseEventHandler,
  animated?: boolean
};

const BurgerButton: FC<BurgerButtonProps> = ({ onClick, animated }) => {
  const transition: Transition = {
    duration: 0.7,
    staggerChildren: 0.15,
  };
  const barVariants: Variants = {
    initial: {
      x: 2.5,
      opacity: 1
    },
    animated: {
      x: 200,
      opacity: 0
    }
  };

  return (
    <S.BurgerButton onClick={onClick}>
      <S.BurgerIllustration
        transition={transition}
        initial="initial"
        animate={animated ? 'animated' : 'initial'}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 397 259"
      >
        <motion.g data-name="bar" variants={barVariants}>
          <rect x="2.5" y="2.5" width="393" height="50" rx="25" fill="#fec107" />
          <path d="M54.29 4.5H367.5a25 25 0 0125 25h0" fill="none" stroke="#fed558" stroke-linecap="round" stroke-linejoin="round" stroke-width="9" />
          <path d="M341.74 50.5H29.5a25 25 0 01-25-25h0" fill="none" stroke="#cb9801" stroke-linecap="round" stroke-linejoin="round" stroke-width="9" />
        </motion.g>
        <motion.g data-name="bar" variants={barVariants}>
          <rect x="2.5" y="104.5" width="393" height="50" rx="25" fill="#fec107" data-name="base" />
          <path data-name="light" d="M54.29 106.5H367.5a25 25 0 0125 25h0" fill="none" stroke="#fed558" stroke-linecap="round" stroke-linejoin="round" stroke-width="9" />
          <path data-name="shadow" d="M341.74 152.5H29.5a25 25 0 01-25-25h0" fill="none" stroke="#cb9801" stroke-linecap="round" stroke-linejoin="round" stroke-width="9" />
        </motion.g>
        <motion.g data-name="bar" variants={barVariants}>
          <rect x="2.5" y="206.5" width="393" height="50" rx="25" fill="#fec107" data-name="base" />
          <path data-name="light" d="M54.29 208.5H367.5a25 25 0 0125 25h0" fill="none" stroke="#fed558" stroke-linecap="round" stroke-linejoin="round" stroke-width="9" />
          <path data-name="shadow" d="M341.74 254.5H29.5a25 25 0 01-25-25h0" fill="none" stroke="#cb9801" stroke-linecap="round" stroke-linejoin="round" stroke-width="9" />
        </motion.g>
      </S.BurgerIllustration>
    </S.BurgerButton>
  );
};


export default BurgerButton;