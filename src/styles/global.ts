import { createGlobalStyle } from 'styled-components';
import { cDarkBlue } from './variables';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    background-color: ${cDarkBlue};
  }
`;

export default GlobalStyle;