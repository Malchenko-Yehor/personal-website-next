import { createGlobalStyle } from 'styled-components';
import { cBlack } from './variables';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    background-color: ${cBlack};
  }
`;

export default GlobalStyle;