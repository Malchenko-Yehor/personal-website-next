import GlobalStyle from '@styles/global';
import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import ViewportProvider from 'stores/viewport';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import gridTheme from '../styles/grid';

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

export default MyApp;
