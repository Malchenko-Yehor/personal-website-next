import { BurgerButton } from "@atoms/BurgerButton/BurgerButton.styled";
import { ziTop } from "@styles/variables";
import styled from "styled-components";

export const Navbar = styled.nav`
  position: fixed;
  z-index: ${ziTop};
  display: flex;
  left: 0;
  right: 0;

  ${BurgerButton} {
    margin-left: auto;
    margin-top: 15px;
    margin-right: 15px;
  }
`;