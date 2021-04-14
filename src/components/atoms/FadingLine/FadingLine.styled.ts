import { pseudoMixin } from "@styles/mixins";
import { cOrange } from "@styles/variables";
import { rgba } from "polished";
import styled from "styled-components";

const lineWidth = '2px';
const afterHeight = '50px';

export interface FadingLineProps {
  animatable?: boolean,
  animationTime?: number,
  startAnimation?: boolean
};

const getClipPath = (props: FadingLineProps) => {
  const { animatable, startAnimation } = props;

  if (startAnimation) return `inset(0 0 -${afterHeight} 0)`;
  if (animatable) return `inset(0 0 100% 0)`;

  return 'none';
};

const FadingLine = styled.div<FadingLineProps>`
  position: relative;
  height: 300px;
  width: ${lineWidth};
  background-color: ${cOrange};
  transition: clip-path ${props => props.animationTime}ms;
  clip-path: ${getClipPath};

  &::after {
    ${pseudoMixin};
    top: 100%;
    left: 0;
    width: ${lineWidth};
    height: ${afterHeight};
    background: linear-gradient(180deg, ${cOrange} 0%, ${rgba(cOrange, 0)} 100%);
  };
`;

export default FadingLine;