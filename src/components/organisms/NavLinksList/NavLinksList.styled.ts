import { motion } from 'framer-motion';
import styled from 'styled-components';

export const NavLinksList = styled.ul`
  position: relative;
  margin: 0;
  margin-top: 20px;
  padding: 0;
  list-style-type: none;
  text-align: center;
`;

export const Item = styled(motion.li)`
  &:not(:last-child) {
    margin-bottom: 21px;
  }
`;
