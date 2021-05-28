import { H2 } from "@atoms/H2/H2.styled";
import { Section } from "@atoms/Section/Section.styled";
import { fontRubik } from "@styles/variables";
import { media } from "styled-bootstrap-grid";
import styled from "styled-components";

export const Career = styled(Section)`
  ${H2} {
    margin-bottom: 5px;

    ${media.lg`
      margin-bottom: 10px;
    `}
  }
`;

export const Experience = styled.span`
  font-family: ${fontRubik};
  font-size: 25px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  & svg {
    width: 30px;
    height: 30px;
    margin-right: 15px;
  }
`;