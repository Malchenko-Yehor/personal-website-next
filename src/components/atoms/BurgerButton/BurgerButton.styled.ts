import { motion } from "framer-motion";
import styled from "styled-components";

export const BurgerButton = styled.button`
  padding: 0;
  cursor: pointer;
`;

export const BurgerIllustration = styled(motion.svg)`
  width: 40px;
  overflow: visible;
`;