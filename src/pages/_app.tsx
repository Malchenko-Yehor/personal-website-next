import React from 'react';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import type { AppProps } from 'next/app'
import gridTheme from '../styles/grid';
import GlobalStyle from '@styles/global';
import { Fragment } from 'react';
import ViewportProvider from 'stores/viewport';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <GlobalStyle />
      <GridThemeProvider gridTheme={gridTheme}>
        <ViewportProvider>
          <Component {...pageProps} />
        </ViewportProvider>
      </GridThemeProvider>
    </Fragment>
  );
}

export default MyApp
