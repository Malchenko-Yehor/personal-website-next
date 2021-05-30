import React from 'react';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import type { AppProps } from 'next/app'
import gridTheme from '../styles/grid';
import GlobalStyle from '@styles/global';
import { Fragment } from 'react';
import ViewportProvider from 'stores/viewport';
import { Provider } from 'react-redux';
import mainStore from 'stores/main-store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <GlobalStyle />
      <GridThemeProvider gridTheme={gridTheme}>
        <ViewportProvider>
          <Provider store={mainStore}>
            <Component {...pageProps} />
          </Provider>
        </ViewportProvider>
      </GridThemeProvider>
    </Fragment>
  );
}

export default MyApp
