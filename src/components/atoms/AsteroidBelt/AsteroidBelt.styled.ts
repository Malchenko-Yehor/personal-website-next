import styled, { keyframes } from 'styled-components';

export const AsteroidBelt = styled.svg``;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

interface MaskContainerProps {
  tilt?: number;
}

export const MaskContainer = styled.g<MaskContainerProps>`
  transform-box: fill-box;
  transform-origin: center;
  transform: rotate(${(props) => 0 + props.tilt}deg);
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
  transform-box: fill-box;
  transform-origin: center;
  animation: ${rotate} ${getRotationDuration} linear infinite;
  animation-direction: ${(props) => (props.rotateCounterclock ? 'reverse' : 'normal')};
`;

interface AsteroidProps {
  rotation: number;
}

export const Asteroid = styled.g<AsteroidProps>`
  transform-box: fill-box;
  transform-origin: left;
  transform: rotate(${(props) => props.rotation}deg);
`;
