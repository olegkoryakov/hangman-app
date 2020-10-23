const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const baseConfig = {
  entry: {
    bundle: path.resolve(__dirname, '../src/index.jsx'),
  },
  output: {
    filename: 'js/[name].js',
    path: path.join(__dirname, '../build'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, '../src'),
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
    }),
  ],
};

module.exports = baseConfig;
