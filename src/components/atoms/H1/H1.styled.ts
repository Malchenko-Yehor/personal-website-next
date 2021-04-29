import { cOrange, cOrange50, fontRubik } from "@styles/variables";
import styled from "styled-components";

export const H1 = styled.h1`
  margin-top: 0;
  margin-bottom: 30px;
  font-family: ${fontRubik};
  font-size: 700;
  font-size: 50px;
  color: ${cOrange};
  text-align: center;
  text-shadow: 2px 2px 0 ${cOrange50};
`;