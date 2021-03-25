import { cOrange, cOrange50, fontFredoka } from "@styles/variables";
import styled from "styled-components";

export const H1 = styled.h1`
  margin-top: 0;
  margin-bottom: 30px;
  font-family: ${fontFredoka};
  font-size: 50px;
  color: ${cOrange};
  text-align: center;
  text-shadow: 2px 2px 0 ${cOrange50};
  letter-spacing: 0.04em;
`;