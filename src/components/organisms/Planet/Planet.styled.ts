import { AsteroidBelt } from '@atoms/AsteroidBelt/AsteroidBelt.styled';
import { absoluteCenterMixin, absoluteFillMixin } from '@styles/mixins';
import { cPureWhite, cWhite } from '@styles/variables';
import { motion } from 'framer-motion';
import { darken } from 'polished';
import styled from 'styled-components';

export const Planet = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;

  & ${AsteroidBelt} {
    ${absoluteFillMixin};
    pointer-events: none;
    z-index: 5;
  }
`;

interface SurfaceProps {
  backgroundColor: string;
}

export const Surface = styled(motion.a)<SurfaceProps>`
  cursor: pointer;
  position: relative;
  display: block;
  width: 62.5%;
  height: 62.5%;
  border-radius: 100%;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    pointer-events: none;
  }

  & ${AsteroidBelt} {
    ${absoluteCenterMixin};
    pointer-events: none;
    width: 160%;
    height: 160%;
    z-index: 5;
  }
`;

export const Shadow = styled.svg`
  ${absoluteFillMixin};
  z-index: 4;
`;

export const Icon = styled.div`
  position: absolute;
  left: 55%;
  top: 45%;
  transform: translate(-50%, -50%);
  width: 20%;
  height: 20%;
  z-index: 4;
  filter: drop-shadow(-1.75px 1.75px 0px ${darken(0.5, cPureWhite)});
`;

export const CratersContainer = styled.div`
  ${absoluteFillMixin};
  border-radius: 100%;
  overflow: hidden;
`;

export const Title = styled(motion.svg)`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 110%;
  height: 110%;
  overflow: visible;
  z-index: 6;
  transform-origin: 50% 50%;
  transform: translateX(-50%) translateY(-50%) rotate(-180deg);
`;

export const TitleText = styled(motion.text)`
  fill: ${cWhite};
  font-size: 9px;
  font-family: 'Rock';
  text-shadow: -0.31em 0.31em 0 ${darken(0.65, cWhite)};
`;
