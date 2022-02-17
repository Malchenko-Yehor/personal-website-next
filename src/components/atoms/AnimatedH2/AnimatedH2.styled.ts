import { media } from '@styles/mixins';
import { cWhite, cWhite50, fontRubik } from '@styles/variables';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const AnimatedH2 = styled(motion.h2)`
  margin-top: 0;
  margin-bottom: 30px;
  font-family: ${fontRubik};
  font-weight: 700;
  font-size: 40px;
  color: ${cWhite};
  text-align: center;
  text-shadow: 1.25px 1.25px 0 ${cWhite50};

  ${media.md} {
    font-size: 55px;
  }
`;
