import { motion, Transition, Variants } from 'framer-motion';
import React, { FC, MouseEventHandler } from 'react';
import * as S from './CrossButton.styled';

export interface CrossButtonProps {
  onClick: MouseEventHandler,
  animated?: boolean,
  delay?: number
};

const CrossButton: FC<CrossButtonProps> = ({ onClick, animated, delay = 0 }) => {
  const barVariants: Variants = {
    initial: (reversed: boolean) => ({
      opacity: 0,
      x: reversed ? 300 : -300,
      y: -300
    }),
    animated: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: delay
      }
    }
  };

  return (
    <S.CrossButton onClick={onClick}>
      <S.CrossIllustration
        transition={{ duration: 0.7 }}
        initial="initial"
        animate={animated ? 'animated' : 'initial'}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 293.02 296.54"
      >
        <motion.g data-name="bar" variants={barVariants}>
          <path d="M191.8 159.94l93.42 93.42a25 25 0 010 35.36 25 25 0 01-35.36 0L7.32 46.18a25 25 0 010-35.36 25 25 0 0135.36 0L191.8 159.94" fill="#fec107" data-name="base" />
          <path d="M140 116.65a6.48 6.48 0 01-4.59-1.91L40.08 19.42a18.49 18.49 0 00-26.16 0 6.5 6.5 0 01-9.19-9.19 31.48 31.48 0 0144.54 0l95.33 95.32a6.51 6.51 0 01-4.6 11.1z" fill="#fed558" />
          <path d="M108.13 147.49a6.5 6.5 0 01-4.6-1.91L5.73 47.77a6.5 6.5 0 119.19-9.19l97.81 97.81a6.51 6.51 0 01-4.6 11.1zM251.86 291.22a6.5 6.5 0 01-4.6-1.91l-96.59-96.59a6.5 6.5 0 119.19-9.19l96.6 96.59a6.51 6.51 0 01-4.6 11.1z" fill="#cb9801" />
          <path d="M279.22 294.22a6.51 6.51 0 01-4.6-11.1 18.52 18.52 0 000-26.16l-95.35-95.36a6.5 6.5 0 019.19-9.19l95.35 95.35a31.54 31.54 0 010 44.55 6.48 6.48 0 01-4.59 1.91z" fill="#fed558" />
        </motion.g>
        <motion.g data-name="bar" variants={barVariants} custom={true}>
          <path d="M285.22 46.18L42.68 288.72a25.003 25.003 0 01-35.36-35.36L249.86 10.82C273.4-12 308.11 22.48 285.22 46.18z" fill="#fec107" />
          <path d="M26 296.54a31.29 31.29 0 01-22.27-9.23 6.5 6.5 0 019.19-9.19 18.49 18.49 0 0026.16 0l80.63-80.63a6.502 6.502 0 119.19 9.2l-80.63 80.62A31.29 31.29 0 0126 296.54z" fill="#cb9801" />
          <path d="M24.68 249.22a6.51 6.51 0 01-4.6-11.1l80.63-80.63a6.502 6.502 0 119.19 9.2l-80.63 80.62a6.48 6.48 0 01-4.59 1.91zM173.15 98a6.51 6.51 0 01-4.59-11.1l77.7-77.7a31.49 31.49 0 0144.55 0 6.5 6.5 0 11-9.19 9.19 18.49 18.49 0 00-26.16 0l-77.71 77.7a6.48 6.48 0 01-4.6 1.91z" fill="#fed558" />
          <path d="M187.07 144.3a6.5 6.5 0 01-4.6-11.09l80.63-80.63a6.502 6.502 0 119.19 9.2l-80.63 80.62a6.45 6.45 0 01-4.59 1.9z" fill="#cb9801" />
        </motion.g>
      </S.CrossIllustration>
    </S.CrossButton>
  );
};


export default CrossButton;