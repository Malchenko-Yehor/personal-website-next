import { cPink, cPink50, fontFredoka } from "@styles/variables";
import styled from "styled-components";

export const H2 = styled.h2`
  margin-top: 0;
  margin-bottom: 30px;
  font-family: ${fontFredoka};
  font-size: 40px;
  color: ${cPink};
  text-align: center;
  text-shadow: 1.25px 1.25px 0 ${cPink50};
  letter-spacing: 0.04em;
`;