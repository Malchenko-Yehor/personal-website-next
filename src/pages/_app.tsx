import React from 'react';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import type { AppProps } from 'next/app'
import gridTheme from '../styles/grid';
import GlobalStyle from '@styles/global';
import { Fragment } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <GlobalStyle />
      <GridThemeProvider gridTheme={gridTheme}>
        <Component {...pageProps} />
      </GridThemeProvider>
    </Fragment>
  );
}

export default MyApp
