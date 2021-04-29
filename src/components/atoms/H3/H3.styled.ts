import { cWhite, cWhite50, fontRubik } from "@styles/variables";
import styled from "styled-components";

export const H3 = styled.h3`
  margin-top: 0;
  margin-bottom: 30px;
  font-family: ${fontRubik};
  font-weight: 700;
  font-size: 30px;
  color: ${cWhite};
  text-align: center;
  text-shadow: 1px 1px 0 ${cWhite50};
`;