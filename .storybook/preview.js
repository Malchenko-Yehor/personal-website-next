import { Fragment } from 'react';
import GlobalStyle from '@styles/global';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import gridTheme from '@styles/grid';
import { devices } from '@styles/variables';
import ViewportProvider from '../src/stores/viewport';
import mainStore from '../src/stores/main-store';
import * as NextImage from 'next/image';
import { Provider } from 'react-redux';
import { themes } from '@storybook/theming';
import { RouterContext } from 'next/dist/shared/lib/router-context';

export const decorators = [
  (Story) => (
    <Fragment>
      <GlobalStyle />
      <GridThemeProvider gridTheme={gridTheme}>
        <ViewportProvider>
          <Provider store={mainStore}>
            <Story />
          </Provider>
        </ViewportProvider>
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
        height: devices[key].height + 'px',
      },
    };
  }

  return viewports;
};

export const parameters = {
  layout: 'fullscreen',
  viewport: {
    viewports: getCustomViewports(),
  },
  nextRouter: {
    Provider: RouterContext.Provider,
    locale: 'en',
    locales: ['en', 'pl', 'uk', 'ru'],
  },
  docs: {
    theme: themes.dark,
  },
};

// Override Next.js image component
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});
