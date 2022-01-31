import { cWhite } from '@styles/variables';
import { motion } from 'framer-motion';
import { darken } from 'polished';
import styled from 'styled-components';

export const RotatingTitle = styled(motion.svg)`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 110%;
  height: 110%;
  overflow: visible;
  z-index: 6;
  transform-origin: 50% 50%;
  transform: translateX(-50%) translateY(-50%) rotate(-180deg);
`;

export const TitleText = styled(motion.text)`
  fill: ${cWhite};
  font-size: 10px;
  font-family: 'Rock';
  text-shadow: -0.25em 0.25em 0 ${darken(0.65, cWhite)};
`;
