import { cOrange, cOrange50, fontRubik } from "@styles/variables";
import { media } from "styled-bootstrap-grid";
import styled from "styled-components";

export const H1 = styled.h1`
  margin-top: 0;
  margin-bottom: 30px;
  font-family: ${fontRubik};
  font-weight: 700;
  font-size: 46px;
  color: ${cOrange};
  text-align: center;
  text-shadow: 2px 2px 0 ${cOrange50};

  ${media.lg`
    font-size: 80px;
  `}
`;