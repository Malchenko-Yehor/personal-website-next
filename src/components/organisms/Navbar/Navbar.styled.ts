import { BurgerButton } from "@atoms/BurgerButton/BurgerButton.styled";
import { LanguageSwitcher } from "@molecules/LanguageSwitcher/LanguageSwitcher.styled";
import { ziTop } from "@styles/variables";
import { media } from "styled-bootstrap-grid";
import styled from "styled-components";

export const Navbar = styled.nav`
  padding: 16px 0;
  position: fixed;
  z-index: ${ziTop};
  left: 0;
  right: 0;

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