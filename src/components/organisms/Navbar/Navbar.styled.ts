import { BurgerButton } from '@atoms/BurgerButton/BurgerButton.styled';
import { LanguageSwitcher } from '@molecules/LanguageSwitcher/LanguageSwitcher.styled';
import { media, pseudoMixin } from '@styles/mixins';
import { cBlack, navbarHeight, scrollBarWidth, ziTop } from '@styles/variables';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Navbar = styled(motion.nav)`
  padding: 10px 0;
  position: absolute;
  z-index: ${ziTop};
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

    ${media.lg} {
      width: calc(100% - ${scrollBarWidth});
    }
  }

  ${BurgerButton} {
    display: block;
  }

  ${LanguageSwitcher} {
    display: none;

    ${media.lg} {
      display: block;
    }
  }
`;
