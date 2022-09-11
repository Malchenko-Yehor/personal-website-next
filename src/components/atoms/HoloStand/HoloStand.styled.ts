import styled from 'styled-components';

interface HoloStandContainerProps {
  color: string;
}

export const HoloStandContainer = styled.div<HoloStandContainerProps>`
  svg {
    width: 100%;
    height: auto;

    .main-color {
      fill: ${(props) => props.color};
      stop-color: ${(props) => props.color};
      stroke: ${(props) => props.color};
    }
  }
`;
