import { motion } from "framer-motion";
import styled from "styled-components";

export const LanguageSwitcher = styled.div`
  position: relative;
  display: inline-flex;
`

export const OpenButton = styled.button`
  padding: 0;
  height: 40px;
  cursor: pointer;

  & svg {
    height: 100%;
    width: auto
  }
`;

export const Switch = styled(motion.div)`
  position: absolute;
  width: 14.9px;
  height: 14.9px;
  border-radius: 50%;
`;

export const FlagsAnchor = styled.ul`
  position: absolute;
  bottom: 0;
  left: 50%;
  padding: 0;
  margin: 0;
  width: 0px;
  height: 0px;
`;