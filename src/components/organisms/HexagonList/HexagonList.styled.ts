import { StarItem, StarsRating } from '@molecules/StarsRating/StarsRating.styled';
import { HexagonCard } from '@organisms/HexagonCard/HexagonCard.styled';
import { media } from '@styles/mixins';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const gap = 10;
const gapMd = 20;
const gapXl = 30;
export const itemsMobile = 3;
export const itemsTabletPortrait = 4;

const calculateFlexBasis = (itemsAmount: number, gap: number) => {
  return `calc(100% / ${itemsAmount} - ${((itemsAmount - 1) / itemsAmount) * gap}px)`;
};

const calculateSideIndent = (itemsAmount: number) => {
  return `calc(100% / ${itemsAmount * 2})`;
};

export const HexagonList = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
  gap: ${gap}px;
  padding: 0;
  margin: 0;

  & ${StarsRating} {
    width: 100%;
    padding: 0 8%;
    justify-content: center;
    gap: 5%;
    margin-top: 5px;
  }

  & ${StarItem} {
    width: 12%;
  }

  ${media.md} {
    gap: ${gapMd}px;
  }
`;

interface ItemProps {
  isShifted: boolean;
}

export const Item = styled(motion.li)<ItemProps>`
  margin: 0;
  padding: 0;
  list-style-type: none;
  flex-basis: ${calculateFlexBasis(itemsMobile, gap)};
  margin-left: ${(props) => (props.isShifted ? calculateSideIndent(itemsMobile) : '0px')};

  &:nth-child(n + ${itemsMobile + 1}) ${HexagonCard} {
    margin-top: -28%;
  }

  ${media.md} {
    flex-basis: ${calculateFlexBasis(itemsTabletPortrait, gapMd)};
    margin-left: ${(props) => (props.isShifted ? calculateSideIndent(itemsTabletPortrait) : '0px')};

    &:nth-child(n + ${itemsMobile + 1}) ${HexagonCard} {
      margin-top: 0;
    }

    &:nth-child(n + ${itemsTabletPortrait + 1}) ${HexagonCard} {
      margin-top: -28%;
    }
  }

  ${media.xl} {
    flex-basis: ${calculateFlexBasis(itemsTabletPortrait, gapXl)};
  }
`;
