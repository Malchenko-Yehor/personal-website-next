import { createGlobalStyle } from 'styled-components';
import { cDarkBlue, cWhite } from './variables';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    background-color: ${cDarkBlue};
    color: ${cWhite};
  }
`;

export default GlobalStyle;