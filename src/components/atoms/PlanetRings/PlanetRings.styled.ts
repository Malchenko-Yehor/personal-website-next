import styled from 'styled-components';

interface PlanetRingsProps {
  tilt?: number;
}

export const PlanetRings = styled.svg<PlanetRingsProps>`
  aspect-ratio: 1/1;
  transform: rotate(${(props) => 0 + props.tilt}deg);
`;
