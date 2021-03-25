import { Fragment } from "react";
import GlobalStyle from '@styles/global';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import gridTheme from '@styles/grid';
import { devices } from '@styles/variables';

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

const getCustomViewports = () => {
  const viewports = {};

  for (const key in devices) {
    viewports[key] = {
      name: key,
      styles: {
        width: devices[key].width + 'px',
        height: devices[key].height + 'px'
      }
    };
  }

  return viewports;
};

export const parameters = {
  layout: 'fullscreen',
  viewport: {
    viewports: getCustomViewports(), // newViewports would be an ViewportMap. (see below for examples)
  },
}