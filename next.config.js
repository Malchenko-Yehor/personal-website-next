module.exports = {
  i18n: {
    locales: ['en', 'pl', 'uk', 'ru'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
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
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};
