import { media } from 'styled-bootstrap-grid';
import styled, { css } from 'styled-components';
import { SectionProps } from './Section';

export const Section = styled.section<SectionProps>`
  padding: 40px 0;

  ${media.sm`
    padding: 50px 0;
  `}

  ${media.md`
    padding: 60px 0;
  `}

  ${media.lg`
    padding: 70px 0;
  `}

  ${media.xl`
    padding: 75px 0;
  `}

  ${(props) =>
    props.noTopIndent &&
    css`
      padding-top: 0;
    `};

  ${(props) =>
    props.noBottomIndent &&
    css`
      padding-bottom: 0;
    `};
`;
