import { fontFredoka } from "@styles/variables";
import styled, { css } from "styled-components";

const ctaStyle = css`
  background-color: #000;
  color: #fff;
  font-family: ${fontFredoka};
  font-size: 20px;
`;

export const Anchor = styled.a`
  ${ctaStyle}
`;

export const Button = styled.button`
  ${ctaStyle}
`;