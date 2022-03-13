import { css } from 'styled-components';
import { devices, sideIndent, sideIndentLg, sideIndentMd, sideIndentSm, sideIndentXl } from './variables';

export const flexCenterMixin = () => {
  return css`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
};

export const centerMixin = () => {
  return css`
    margin-left: auto;
    margin-right: auto;
  `;
};

export const pseudoMixin = () => {
  return css`
    content: '';
    display: block;
    position: absolute;
  `;
};

export const absoluteFillMixin = () => {
  return css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `;
};

export const absoluteCenterMixin = () => {
  return css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;
};

export const sideIndentsMixin = () => {
  return css`
    padding-right: ${sideIndent};
    padding-left: ${sideIndent};

    ${media.sm} {
      padding-right: ${sideIndentSm};
      padding-left: ${sideIndentSm};
    }

    ${media.md} {
      padding-right: ${sideIndentMd};
      padding-left: ${sideIndentMd};
    }

    ${media.lg} {
      padding-right: ${sideIndentLg};
      padding-left: ${sideIndentLg};
    }

    ${media.xl} {
      padding-right: ${sideIndentXl};
      padding-left: ${sideIndentXl};
    }
  `;
};

export const media = {
  sm: `@media (min-width: ${devices.bigPhone.width}px)`,
  md: `@media (min-width: ${devices.tabletPortrait.width}px)`,
  lg: `@media (min-width: ${devices.tablet.width}px)`,
  xl: `@media (min-width: ${devices.laptop.width}px)`,
  xxl: `@media (min-width: ${devices.pc.width}px)`,
};

export const getParallaxScaleFactor = (parallaxPerspective: number, zDistance: number) => {
  return (parallaxPerspective - zDistance) / parallaxPerspective;
};
