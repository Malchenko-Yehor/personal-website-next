import { css } from "styled-components";

export const pseudoMixin = () => {
  return css`
    content: '';
    display: block;
    position: absolute;
  `;
};