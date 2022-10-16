import Section from '@atoms/Section';
import { PlanetsList } from '@organisms/PlanetsList/PlanetsList.styled';
import styled from 'styled-components';

export const Portfolio = styled(Section)`
  & ${PlanetsList} {
    margin-top: -5%;
  }
`;
