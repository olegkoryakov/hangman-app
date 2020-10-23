const path = require('path');

const devConfig = {
  mode: 'development',
  devServer: {
    port: '1337',
    contentBase: path.resolve(__dirname, '../build'),
    overlay: true,
    historyApiFallback: true,
  },
  devtool: 'eval-cheap-source-map',
};

module.exports = devConfig;
