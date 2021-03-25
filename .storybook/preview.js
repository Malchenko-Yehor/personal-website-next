import { Fragment } from "react";
import GlobalStyle from '@styles/global';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import gridTheme from '@styles/grid';

export const decorators = [
  (Story) => (
    <Fragment>
      <GlobalStyle />
      <GridThemeProvider gridTheme={gridTheme}>
        <Story />
      </GridThemeProvider>
    </Fragment>
  ),
];

export const parameters = { layout: 'fullscreen' }