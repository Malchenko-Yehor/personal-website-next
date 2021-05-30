import { motion } from "framer-motion";
import styled from "styled-components";

export const BurgerButton = styled.button`
  cursor: pointer;
`;

export const BurgerIllustration = styled(motion.svg)`
  width: 50px;
  overflow: visible;
`;