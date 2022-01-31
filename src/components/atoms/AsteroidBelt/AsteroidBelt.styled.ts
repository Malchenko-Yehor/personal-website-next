import styled, { keyframes } from 'styled-components';
interface AsteroidBeltProps {
  tilt?: number;
}

export const AsteroidBelt = styled.svg<AsteroidBeltProps>`
  transform: rotate(${(props) => 0 + props.tilt}deg);
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const AsteroidsContainer = styled.g`
  transform-box: fill-box;
  transform-origin: center;
  transform: rotate(33.33deg) skewX(-45deg);
`;

interface AnimationContainerProps {
  rotateCounterclock?: boolean;
  rotationDuration?: number;
}

const getRotationDuration = (props: AnimationContainerProps) => {
  return props.rotationDuration ? `${props.rotationDuration}s` : '13s';
};

export const AnimationContainer = styled.g<AnimationContainerProps>`
  will-change: transform;
  transform-box: fill-box;
  transform-origin: center;
  animation: ${rotate} ${getRotationDuration} linear infinite;
  animation-direction: ${(props) => (props.rotateCounterclock ? 'reverse' : 'normal')};
`;
