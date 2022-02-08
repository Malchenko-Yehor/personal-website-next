import { motion } from 'framer-motion';
import styled from 'styled-components';

export const PlanetsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 0 25% 0;
  margin: 0;
  overflow: hidden;
`;

interface ItemProps {
  isAnimated: boolean;
  isEven: boolean;
}

const getItemTransform = ({ isAnimated: animated, isEven }: ItemProps) => {
  const translateX = animated ? '0%' : isEven ? '30%' : '-30%';
  const translateY = isEven ? '50%' : '0%';

  return `translate(${translateX}, ${translateY})`;
};

export const Item = styled.li<ItemProps>`
  opacity: ${(props) => (props.isAnimated ? 1 : 0)};
  transform: ${getItemTransform};
  transition: transform 0.4s, opacity 0.15s;
  transition-timing-function: cubic-bezier(0.18, 0.88, 0.32, 1.27);
  list-style-type: none;
`;
