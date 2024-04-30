const webpack = require('webpack');
const { configureRuntimeEnv } = require('next-runtime-env/build/configure');

configureRuntimeEnv();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false,
  webpack(config) {
    const webpackConfig = { ...config };
    // read .env
    webpackConfig.plugins.push(new webpack.EnvironmentPlugin(process.env));

    return webpackConfig;
  },
};

module.exports = nextConfig;
