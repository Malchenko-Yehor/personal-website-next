import styled from 'styled-components';

export const PlanetsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 0 25% 0;
  margin: 0;
`;

export const Item = styled.li`
  list-style-type: none;

  &:nth-child(even) {
    transform: translateY(50%);
  }
`;
