import { fontSans } from '@styles/variables';
import styled from 'styled-components';

export const Interest = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 15px;
`;

export const Icon = styled.i`
  position: relative;
  width: 45px;
  flex-shrink: 0;
  aspect-ratio: 1/1;
`;

export const Title = styled.span`
  font-size: 18px;
  font-weight: 700;
`;
