import { ColouredIcon } from '@atoms/ColouredIcon/ColouredIcon.styled';
import styled, { keyframes } from 'styled-components';

const glitch = keyframes`
  72% {
    transform: none;
    opacity: 1;
  }
  75% {
    transform: skew(1deg, 0.5deg);
    opacity: 0.85;
  }
  80% {
    transform: none;
    opacity: 1;
  }
  100% {
    transform: none;
    opacity: 1;
  }
`;

export const HoloLink = styled.a`
  position: relative;
`;

export const IconWrapper = styled.div`
  position: absolute;
  opacity: 80%;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  width: 40%;
  aspect-ratio: 1;

  ${ColouredIcon} {
    animation: ${glitch} 2.5s infinite;
  }
`;
