import { pseudoMixin } from "@styles/mixins";
import { cOrange } from "@styles/variables";
import { motion } from "framer-motion";
import { rgba } from "polished";
import styled from "styled-components";

const lineWidth = '2px';
const afterHeight = '50px';

const FadingLine = styled(motion.div)`
  position: relative;
  height: 300px;
  width: ${lineWidth};

  &::before {
    ${pseudoMixin};
    left: 0;
    top: 0;
    height: calc(100% - ${afterHeight});
    width: ${lineWidth};
    background-color: ${cOrange};
  }

  &::after {
    ${pseudoMixin};
    bottom: 0;
    left: 0;
    width: ${lineWidth};
    height: ${afterHeight};
    background: linear-gradient(180deg, ${cOrange} 0%, ${rgba(cOrange, 0)} 100%);
  };
`;

export default FadingLine;