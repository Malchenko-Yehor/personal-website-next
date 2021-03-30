import { bp } from "@styles/mixins";
import styled from "styled-components";

interface SectionProps {
  noTopIndent?: boolean,
  noBottomIndent?: boolean
};

export const Section = styled.section<SectionProps>`
  padding: 40px 0;

  ${bp.sm} {
    padding: 50px 0;
  }

  ${bp.md} {
    padding: 60px 0;
  }

  ${bp.lg} {
    padding: 70px 0;
  }

  ${bp.xl} {
    padding: 75px 0;
  }
`;