const { merge } = require('webpack-merge');
const baseConfig = require('./config.base');
const devConfig = require('./config.dev');
const prodConfig = require('./config.prod');

module.exports = (env) => {
  switch (env) {
    case 'production':
      return merge(baseConfig, prodConfig);
    case 'development':
      return merge(baseConfig, devConfig);
    default:
      throw new Error('no matching configuration was found!');
  }
};
