import { H3 } from "@atoms/H3/H3.styled";
import { Paragraph } from "@atoms/Paragraph/Paragraph.styled";
import { pseudoMixin } from "@styles/mixins";
import { cBlack, cOrange, cWhite } from "@styles/variables";
import styled, { css } from "styled-components";

const cardStyle = css`
  color: ${cBlack};
  background-color: ${cWhite};
  border-radius: 10px;

  & ${H3},
  & ${Paragraph} {
    color: ${cBlack};
    margin-bottom: 0;
  }

  & ${H3} {
    font-size: 25px;
    text-align: left;
    text-shadow: none;
  }

  & ${Paragraph} {
    font-size: 16px;
  }
`;

export const Article = styled.article`
  ${cardStyle};
`;

export const Anchor = styled.a`
  ${cardStyle};
  text-decoration: none;
  display: block;
`;

interface HeaderProps {
  arrowOnRightSide?: boolean
}

const getArrowPosition = ({ arrowOnRightSide }: HeaderProps) => {
  return arrowOnRightSide
    ? css`left: calc(100% - 3px);`
    : css`right: calc(100% - 3px);`
};

const getArrowRotation = ({ arrowOnRightSide }: HeaderProps) => {
  const rotation = arrowOnRightSide ? 90 : -90;

  return `rotate(${rotation}deg)`;
};

export const Header = styled.header<HeaderProps>`
  position: relative;
  background-color: ${cOrange};
  padding: 7px 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  &::after {
    ${pseudoMixin}
    ${getArrowPosition}
    top: 50%;
    width: 15px;
    height: 10px;
    background-color: ${cOrange};
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    transform: translateY(-50%) ${getArrowRotation}
  }
`;

export const ContentContainer = styled.div`
  padding: 6px 10px 11px 10px;
`;