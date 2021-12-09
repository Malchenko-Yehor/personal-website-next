import { media } from 'styled-bootstrap-grid';
import { css } from 'styled-components';
import { sideIndent, sideIndentLg, sideIndentMd, sideIndentSm, sideIndentXl } from './variables';

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
    height: 100;
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

    ${media.sm`
      padding-right: ${sideIndentSm};
      padding-left: ${sideIndentSm};
    `}

    ${media.md`
      padding-right: ${sideIndentMd};
      padding-left: ${sideIndentMd};
    `}

    ${media.lg`
      padding-right: ${sideIndentLg};
      padding-left: ${sideIndentLg};
    `}

    ${media.xl`
      padding-right: ${sideIndentXl};
      padding-left: ${sideIndentXl};
    `}
  `;
};
