import { cWhite, cWhite50, fontFredoka } from "@styles/variables";
import styled from "styled-components";

export const H3 = styled.h3`
  margin-top: 0;
  margin-bottom: 30px;
  font-family: ${fontFredoka};
  font-size: 30px;
  color: ${cWhite};
  text-align: center;
  text-shadow: 1px 1px 0 ${cWhite50};
  letter-spacing: 0.04em;
`;