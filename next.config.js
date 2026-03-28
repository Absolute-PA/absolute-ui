const webpack = require('webpack');
const { configureRuntimeEnv } = require('next-runtime-env/build/configure');

configureRuntimeEnv();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false,
  webpack(config) {
    const webpackConfig = { ...config };
    // Filter out environment variables that conflict with Next.js plugins
    const allowedEnvVars = {};
    const excludedKeys = ['NEXT_RUNTIME', '__NEXT_OPTIMIZE_FONTS'];

    Object.keys(process.env).forEach((key) => {
      if (!excludedKeys.includes(key)) {
        allowedEnvVars[key] = process.env[key];
      }
    });

    // Only add EnvironmentPlugin if there are variables to add
    if (Object.keys(allowedEnvVars).length > 0) {
      webpackConfig.plugins.push(new webpack.EnvironmentPlugin(allowedEnvVars));
    }

    return webpackConfig;
  },
};

module.exports = nextConfig;
