import { ScaledText } from '@atoms/ScaledText/ScaledText.styled';
import { StarsRating } from '@molecules/StarsRating/StarsRating.styled';
import { absoluteFillMixin, flexCenterMixin, media } from '@styles/mixins';
import { cBlack, fontRubik } from '@styles/variables';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const HexagonCard = styled(motion.div)`
  ${flexCenterMixin};
  flex-direction: column;
  position: relative;
  clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
  aspect-ratio: 183 / 210;

  & ${StarsRating} {
    pointer-events: none;
    margin-top: 10px;
  }
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
  pointer-events: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15%;
  width: 100%;
  padding: 0 14%;
  font-family: ${fontRubik};
  font-weight: 700;
  font-size: 13.5px;
  word-break: break-word;
  color: ${cBlack};

  ${media.sm} {
    font-size: 18px;
  }

  ${media.md} {
    font-size: 22px;
  }

  & ${ScaledText} {
    max-height: 100%;
    height: 100%;

    & text {
      fill: ${cBlack};
    }
  }
`;
