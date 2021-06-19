import { BurgerButton } from "@atoms/BurgerButton/BurgerButton.styled";
import { ziTop } from "@styles/variables";
import styled from "styled-components";

export const Navbar = styled.nav`
  padding: 16px 0;
  position: fixed;
  z-index: ${ziTop};
  left: 0;
  right: 0;

  ${BurgerButton} {
    display: block;
  }
`;