import { CrossButton } from "@atoms/CrossButton/CrossButton.styled";
import { ziOverlay } from "@styles/variables";
import styled from "styled-components";

interface MobileMenuProps {
  opened: boolean
};

export const MobileMenu = styled.div<MobileMenuProps>`
  pointer-events: ${props => props.opened ? 'all' : 'none'};
  position: fixed;
  z-index: ${ziOverlay};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  & > * {
    pointer-events: inherit;
  }

  ${CrossButton} {
    position: absolute;
    right: 15px;
    top: 15px;
  }
`;