import { getParallaxScaleFactor, media } from '@styles/mixins';
import { cBlack, cWhite50, navbarHeight, scrollBarWidth } from '@styles/variables';
import styled from 'styled-components';

export const Main = styled.main`
  position: relative;
  flex-grow: 1;
  padding-top: ${navbarHeight};

  ${media.lg} {
    padding-top: 80px;
  }
`;

export const ParallaxContainer = styled.div`
  position: relative;
  perspective: 8px;
  perspective-origin: 0%;
  height: calc(100vh);
  overflow-y: auto;
  overflow-x: hidden;

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
  height: number;
}

export const Background = styled.div<BackgroundProps>`
  position: absolute;
  top: -${navbarHeight};
  right: -6px;
  width: calc(100% + 6px);
  height: ${(props) => (props.height ? `calc(${props.height}px + ${navbarHeight})` : '100%')};
  background-image: url('/images/illustrations/space.svg');
  background-repeat: repeat-y;
  background-size: cover;
  background-attachment: scroll;
  transform-origin: 0;
  transform: translateZ(-3px) scale(${getParallaxScaleFactor(8, -3)});
`;
