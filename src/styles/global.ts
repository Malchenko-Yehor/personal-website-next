import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';
import { cDarkBlue, cWhite, fontSans } from './variables';

const GlobalStyle = createGlobalStyle`
  ${fonts};

  * {
    box-sizing: border-box;
  }

  #root,
  #__next {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
  

  body {
    position: relative;
    padding: 0;
    margin: 0;
    background-color: ${cDarkBlue};
    color: ${cWhite};
    font-family: ${fontSans};
    overflow: visible;
  }

  button {
    background-color: transparent;
    border: none;
  }
`;

export default GlobalStyle;
