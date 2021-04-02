import { fontSans } from "@styles/variables";
import styled from "styled-components";

export const DateRange = styled.time`
  display: inline-flex;
  align-items: center;
  font-family: ${fontSans};
  font-size: 16px;
  font-weight: 700;

  & svg {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
`;