import { absoluteCenterMixin, absoluteFillMixin } from '@styles/mixins';
import { cBlack, cOrange, cOrange50, fontRubik, ziBottom, ziMedium } from '@styles/variables';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const HexagonCard = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
  aspect-ratio: 183 / 210;

  & svg {
    ${absoluteFillMixin};
  }
`;

export const Icon = styled(motion.img)`
  position: absolute;
  pointer-events: none;
  width: 43%;
  height: 38%;
  object-fit: contain;
`;

export const Title = styled(motion.span)`
  position: absolute;
  pointer-events: none;
  font-family: ${fontRubik};
  font-weight: 700;
  padding: 0 5%;
  font-size: 35px;
  color: ${cBlack};
`;
