import { BurgerButton } from '@atoms/BurgerButton/BurgerButton.styled';
import { pseudoMixin } from '@styles/mixins';
import { cBlack, navbarHeight, ziTop } from '@styles/variables';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Navbar = styled(motion.nav)`
  padding: 10px 0;
  position: sticky;
  z-index: ${ziTop};
  top: 0;
  left: 0;
  right: 0;
  height: ${navbarHeight};

  &::before {
    ${pseudoMixin};
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: ${cBlack};
  }

  ${BurgerButton} {
    display: block;
  }
`;
