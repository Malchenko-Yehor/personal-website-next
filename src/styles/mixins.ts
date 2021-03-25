import { css } from "styled-components";
import { devices } from "./variables";

export const pseudoMixin = () => {
  return css`
    content: '';
    display: block;
    position: absolute;
  `;
};

export const bp = {
  xxl: `@media only screen and (min-width: ${devices.pc.width}px)`,
  xl: `@media only screen and (min-width: ${devices.laptop.width}px)`,
  lg: `@media only screen and (min-width: ${devices.tablet.width}px)`,
  md: `@media only screen and (min-width: ${devices.tablet.height}px)`,
  sm: `@media only screen and (min-width: ${devices.bigPhone.width}px)`,
};