import { cOrange } from "@styles/variables";
import { motion } from "framer-motion";
import { rgba } from "polished";
import styled from "styled-components";

const lineWidth = '2px';

const FadingLine = styled(motion.div)`
  position: relative;
  height: 300px;
  width: ${lineWidth};
  background: linear-gradient(180deg, ${rgba(cOrange, 0)} 0%, ${cOrange} 50px, ${cOrange} calc(100% - 50px), ${rgba(cOrange, 0)} 100%);
`;

export default FadingLine;