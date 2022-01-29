import styled from 'styled-components';

export interface CraterProps {
  size: string;
  topPosition: string;
  leftPosition: string;
  zIndex?: number;
}

export const Crater = styled.svg<CraterProps>`
  position: absolute;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  top: ${(props) => props.topPosition};
  left: ${(props) => props.leftPosition};
  transform: translate(-50%, -50%);
  z-index: ${(props) => props.zIndex || 2};
`;

export const CraterShadow = styled(Crater)`
  z-index: ${(props) => props.zIndex || 1};
`;
