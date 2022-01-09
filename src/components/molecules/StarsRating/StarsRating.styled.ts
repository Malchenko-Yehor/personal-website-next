import { absoluteFillMixin } from '@styles/mixins';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StarsRating = styled(motion.ul)`
  display: flex;
  margin: 0;
  padding: 0;
  gap: 5px;
`;

interface ItemProps {
  isActive: boolean;
}

export const StarItem = styled(motion.li)<ItemProps>`
  list-style-type: none;
  filter: grayscale(${(props) => (props.isActive ? 0 : 0.7)});
  width: 15px;
  aspect-ratio: 1 / 1;

  & svg {
    ${absoluteFillMixin};
  }
`;
