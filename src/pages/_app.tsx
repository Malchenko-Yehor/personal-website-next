import '../styles/globals.css';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import type { AppProps } from 'next/app'
import gridTheme from '../styles/grid';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GridThemeProvider gridTheme={gridTheme}>
      <Component {...pageProps} />
    </GridThemeProvider>
  );
}

export default MyApp
