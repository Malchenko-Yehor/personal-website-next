import { media } from '@styles/mixins';
import { cPink, cPink50, cWhite, cWhite50, fontRubik } from '@styles/variables';
import styled from 'styled-components';

export const H2 = styled.h2`
  margin-top: 0;
  margin-bottom: 30px;
  font-family: ${fontRubik};
  font-weight: 700;
  font-size: 40px;
  color: ${cWhite};
  text-align: center;
  text-shadow: 1.25px 1.25px 0 ${cWhite50};

  ${media.md} {
    font-size: 55px;
  }
`;
