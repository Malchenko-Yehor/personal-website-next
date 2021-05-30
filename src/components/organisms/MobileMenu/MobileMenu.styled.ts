import { CrossButton } from "@atoms/CrossButton/CrossButton.styled";
import { absoluteFillMixin } from "@styles/mixins";
import styled from "styled-components";

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  ${CrossButton} {
    position: absolute;
    right: 15px;
    top: 15px;
  }
`;