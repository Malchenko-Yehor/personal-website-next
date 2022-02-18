import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';
import { cDarkBlue, cWhite, fontSans } from './variables';

const GlobalStyle = createGlobalStyle`
  ${fonts};

  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    background-color: ${cDarkBlue};
    color: ${cWhite};
    font-family: ${fontSans}
  }

  body.scroll-lock {
    overflow: hidden;
  }

  button {
    background-color: transparent;
    border: none;
  }
`;

export default GlobalStyle;
