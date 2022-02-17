import { media } from '@styles/mixins';
import styled from 'styled-components';

const itemShiftAmount = 50;
const itemShiftAmountLg = 33;

export const PlanetsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 0 25% 0;
  margin: 0;
  overflow: hidden;

  ${media.lg} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

interface ItemProps {
  isAnimated: boolean;
}

const getTranslate = ({ isAnimated }: ItemProps, translateAmount: number) => {
  const translate = isAnimated ? translateAmount : 50 + translateAmount;

  return `translateY(${translate}%)`;
};

export const Item = styled.li<ItemProps>`
  opacity: ${(props) => (props.isAnimated ? 1 : 0)};
  transition: transform 0.4s, opacity 0.15s;
  transition-timing-function: cubic-bezier(0.18, 0.88, 0.32, 1.27);
  list-style-type: none;
  transform: ${(props) => getTranslate(props, 0)};

  &:nth-child(2n) {
    transform: ${(props) => getTranslate(props, itemShiftAmount)};
  }

  ${media.lg} {
    &:nth-child(2n) {
      transform: unset;
    }

    &:nth-child(3n + 2) {
      transform: ${(props) => getTranslate(props, itemShiftAmountLg)};
    }

    &:nth-child(3n) {
      transform: ${(props) => getTranslate(props, 2 * itemShiftAmountLg)};
    }
  }
`;
