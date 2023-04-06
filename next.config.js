/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ['default', 'en', 'ua'],
    defaultLocale: 'default',
  },
};

module.exports = nextConfig;
