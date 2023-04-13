/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ['en', 'ua'],
    defaultLocale: 'en',
    localeDetection: true,
  }
};

module.exports = nextConfig;
