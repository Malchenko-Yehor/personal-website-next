import { H1 } from '@atoms/H1/H1.styled';
import { Paragraph } from '@atoms/Paragraph/Paragraph.styled';
import { Section } from '@atoms/Section/Section.styled';
import { InterestsList } from '@molecules/InterestsList/InterestsList.styled';
import styled from 'styled-components';
import { media } from '@styles/mixins';
import { cDarkBlue } from '@styles/variables';

export const AboutMe = styled(Section)`
  text-align: center;

  & ${Paragraph} {
    text-align: center;
    text-shadow: 0em 0em 0.35em ${cDarkBlue};
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
