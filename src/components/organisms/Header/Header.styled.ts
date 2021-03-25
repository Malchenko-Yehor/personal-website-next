import { Paragraph } from "@atoms/Paragraph/Paragraph.styled";
import { bp } from "@styles/mixins";
import styled from "styled-components";

export const Header = styled.header`
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