const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-addon-next-router'],
  babel: async (options) => ({
    ...options,
    plugins: [['@babel/plugin-proposal-class-properties', { loose: true }]],
  }),
  webpackFinal: async (config) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()];

    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            jsx: {
              babelConfig: {
                plugins: ['react-inline-svg-unique-id'],
              },
            },
            svgoConfig: {
              plugins: [
                {
                  prefixIds: false,
                },
                {
                  removeViewBox: false,
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};
