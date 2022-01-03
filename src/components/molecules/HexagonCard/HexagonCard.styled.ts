import { absoluteFillMixin, media } from '@styles/mixins';
import { cBlack, fontRubik } from '@styles/variables';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const HexagonCard = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
  aspect-ratio: 183 / 210;
`;

export const HexagonWrapper = styled(motion.div)`
  ${absoluteFillMixin};

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
  max-width: 100%;
  position: absolute;
  pointer-events: none;
  font-family: ${fontRubik};
  font-weight: 700;
  font-size: 13.5px;
  word-break: break-word;
  padding: 0 11%;
  text-align: center;
  color: ${cBlack};

  ${media.sm} {
    font-size: 18px;
  }

  ${media.md} {
    font-size: 22px;
  }
`;
