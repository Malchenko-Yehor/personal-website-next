import { pseudoMixin } from "@styles/mixins";
import { cBlack, cOrange, cOrange50, cTransparent, fontSans, ziBottom } from "@styles/variables";
import styled, { css } from "styled-components";

const borderRadius = '40px';

export const Label = styled.span`
  position: relative;
  z-index: ${ziBottom};
  display: block;
  padding: 13px 49px;
  border-radius: ${borderRadius};
  background-color: ${cOrange};
  color: ${cBlack};
  font-family: ${fontSans};
  font-size: 24px;
  font-weight: 700;
  transition: transform 0.3s;
`;

const ctaStyle = css`
  position: relative;
  cursor: pointer;
  display: inline-block;
  border: 0;

  &::after {
    ${pseudoMixin};
    width: 100%;
    height: 100%;
    bottom: -3px;
    right: -2px;
    border-radius: ${borderRadius};
    background-color: ${cOrange50};
  }

  &:active ${Label} {
    transform: translate(2px, 3px);
  }
`;

export const Anchor = styled.a`
  ${ctaStyle};
  text-decoration: none;
`;

export const Button = styled.button`
  ${ctaStyle};
  padding: 0;
  border: 0;
  background-color: ${cTransparent};
  outline: 0;
`;