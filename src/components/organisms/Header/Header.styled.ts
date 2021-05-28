import { H1 } from "@atoms/H1/H1.styled";
import { sideIndentsMixin } from "@styles/mixins";
import { motion } from "framer-motion";
import { media } from "styled-bootstrap-grid";
import styled from "styled-components";

export const Header = styled.header`
  position: relative;
  overflow: hidden;

  & img {
    position: relative;
    width: 100vw;
    height: auto;
  }

  & ${H1} {
    ${sideIndentsMixin}
    position: absolute;
    top: 33%;
    width: 100%;

    ${media.lg`
      top: 15%;
      left: 50%;
      transform: translateX(-50%);
      max-width: 60%;
    `}
  }
`;

export const SkyLayer = styled(motion.div)`
  position: absolute;
`;

export const MediumLayer = styled(motion.div)`
  position: absolute;
  display: none;

  ${media.lg`
    display: block;
  `}
`;

export const FrontLayer = styled.div`
  pointer-events: none;
  position: relative;
  transform: translateY(5px);
`;