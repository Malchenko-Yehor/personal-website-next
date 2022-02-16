import { H1 } from '@atoms/H1/H1.styled';
import { Paragraph } from '@atoms/Paragraph/Paragraph.styled';
import { Section } from '@atoms/Section/Section.styled';
import { InterestsList } from '@molecules/InterestsList/InterestsList.styled';
import styled from 'styled-components';
import { media } from '@styles/mixins';

export const AboutMe = styled(Section)`
  text-align: center;

  & ${Paragraph} {
    text-align: center;
  }

  & ${H1} {
    margin-top: 35px;

    ${media.md} {
      margin-top: 0;
    }
  }

  & ${InterestsList} {
    margin-top: 35px;
  }
`;
