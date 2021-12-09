import { BurgerButton } from '@atoms/BurgerButton/BurgerButton.styled';
import { LanguageSwitcher } from '@molecules/LanguageSwitcher/LanguageSwitcher.styled';
import { pseudoMixin } from '@styles/mixins';
import { cBlack, ziTop } from '@styles/variables';
import { media } from 'styled-bootstrap-grid';
import styled from 'styled-components';

export const Navbar = styled.nav`
  padding: 10px 0;
  position: fixed;
  z-index: ${ziTop};
  left: 0;
  right: 0;

  ${media.lg`
    padding: 16px 0;
  `}

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

    ${media.lg`
      display: none;
    `}
  }

  ${LanguageSwitcher} {
    display: none;

    ${media.lg`
      display: block;
    `}
  }
`;
