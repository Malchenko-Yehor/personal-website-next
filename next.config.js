module.exports = {
  i18n: {
    locales: ['en', 'pl', 'uk', 'ru'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['res.cloudinary.com']
  },
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
};