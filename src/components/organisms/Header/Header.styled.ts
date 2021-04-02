import { Paragraph } from "@atoms/Paragraph/Paragraph.styled";
import { bp } from "@styles/mixins";
import styled from "styled-components";

export const Header = styled.header`
  padding-bottom: 40px;

  ${bp.sm} {
    padding-bottom: 50px;
  }

  ${bp.md} {
    padding-bottom: 60px;
  }

  ${bp.lg} {
    padding-bottom: 70px;
  }

  ${bp.xl} {
    padding-bottom: 75px;
  }

  & ${Paragraph} {
    text-align: center;
    margin-bottom: 0;
  }
`;

export const HeaderImage = styled.div`
  margin-bottom: 30px;

  ${bp.lg} {
    margin-bottom: 0;
  }
`