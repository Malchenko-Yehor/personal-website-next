import { getParallaxScaleFactor, media } from '@styles/mixins';
import { cBlack, cWhite50, navbarHeight, scrollBarWidth } from '@styles/variables';
import styled from 'styled-components';

export const Main = styled.main`
  position: relative;
  flex-grow: 1;
  padding-top: ${navbarHeight};
`;

export const ParallaxContainer = styled.div`
  position: relative;
  perspective: 8px;
  perspective-origin: 0%;
  transform-style: preserve-3d;
  height: calc(100vh);
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-color: ${cWhite50};
  scrollbar-width: ${scrollBarWidth};

  ${media.lg} {
    &::-webkit-scrollbar {
      -webkit-appearance: none;
      width: ${scrollBarWidth};
    }

    &::-webkit-scrollbar-track {
      background-color: ${cBlack};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${cWhite50};
      border-radius: 20px;
    }
  }
`;

export const ParallaxFront = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  transform: translateZ(0);
  min-height: 100%;
`;

interface BackgroundProps {
  bgHeight: number;
}

export const Background = styled.div<BackgroundProps>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: ${(props) => `${props.bgHeight}px`};
  background-image: url('/media/images/illustrations/space.svg');
  background-repeat: repeat-y;
  background-size: cover;
  transform-origin: 0;
  transform: translateZ(-3px) scale(${getParallaxScaleFactor(8, -3)});
`;
