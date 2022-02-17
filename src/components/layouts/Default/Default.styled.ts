import { media } from '@styles/mixins';
import styled from 'styled-components';

export const Main = styled.main`
  overflow-x: hidden;
  padding-top: 55px;

  ${media.lg} {
    padding-top: 80px;
  }
`;
