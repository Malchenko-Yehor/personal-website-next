import { Interest } from '@atoms/Interest/Interest.styled';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const InterestsList = styled(motion.ul)`
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 0;
  margin: auto;
  text-align: left;
`;

export const Item = styled(motion.li)`
  list-style-type: none;
`;
