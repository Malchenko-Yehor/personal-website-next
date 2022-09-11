import { media } from '@styles/mixins';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const HoloList = styled(motion.ul)`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
  flex-wrap: wrap;
  gap: 10%;
  row-gap: 50px;

  ${media.md} {
    gap: 4%;
    row-gap: 60px;
  }
`;

export const Item = styled(motion.li)`
  width: 45%;

  ${media.md} {
    width: 20%;
  }
`;
