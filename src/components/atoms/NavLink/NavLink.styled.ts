import { cBlack, cPink, fontRubik } from '@styles/variables';
import styled from 'styled-components';

export const NavLink = styled.a`
  position: relative;
  color: ${cBlack};
  font-family: ${fontRubik};
  text-transform: uppercase;
  font-size: 20px;
  text-decoration: none;
  transition: color 0.5s;
  outline: 0;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: -10px;
    left: -15px;
    width: calc(100% + 30px);
    height: calc(100% + 20px);
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: transform 0.3s;
    backdrop-filter: invert(100%);
  }

  &:hover::after,
  &:focus::after {
    transform: scaleY(1);
  }
`;
