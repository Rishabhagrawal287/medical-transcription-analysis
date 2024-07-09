const webpack = require('webpack');

module.exports = function override(config) {
  // Define fallback object to resolve module dependencies for browser environment
  const fallback = config.resolve.fallback || {};

  // Add module fallbacks
  Object.assign(fallback, {
    crypto: 'crypto-browserify',
    stream: 'stream-browserify',
    assert: 'assert',
    http: 'stream-http',
    os: 'os-browserify',
    path: 'path-browserify',
    url: 'url',
    https: 'https-browserify',
    // Added buffer fallback
    buffer: 'buffer',
  });

  // Apply fallback configuration to webpack config
  config.resolve.fallback = fallback;

  // Add plugins to webpack config
  config.plugins = (config.plugins || []).concat([
    // Provide global variables for modules that need them
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
      // Added global variable for "util"
      util: 'util',
    }),
  ]);

  // Log the modified config for debugging
  console.log('Modified webpack config:', config);

  return config;
};
