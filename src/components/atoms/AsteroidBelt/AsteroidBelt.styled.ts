import styled from 'styled-components';
interface AsteroidBeltProps {
  tilt?: number;
}

export const AsteroidBelt = styled.div<AsteroidBeltProps>`
  transform: rotate(${(props) => 0 + props.tilt}deg);
`;
